#!/usr/bin/env ruby

require "json"
require "net/http"
require "rss"
require "uri"

FEED_URL = "https://tech-blog.shinyaishizaki.com/feed.xml"
OUTPUT_PATH = File.expand_path("../_data/latest_posts.json", __dir__)
MAX_POSTS = 5

begin
uri = URI(FEED_URL)
request = Net::HTTP::Get.new(uri)
request["User-Agent"] = "shinyaishizaki.com RSS fetcher"

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https", open_timeout: 10, read_timeout: 20) do |http|
  http.request(request)
end

unless response.is_a?(Net::HTTPSuccess)
  raise "RSS request failed with HTTP #{response.code}"
end

feed = RSS::Parser.parse(response.body, false)
posts = feed.items.first(MAX_POSTS).filter_map do |item|
  title = item.title.respond_to?(:content) ? item.title.content.to_s.strip : item.title.to_s.strip
  url = item.link.respond_to?(:href) ? item.link.href.to_s.strip : item.link.to_s.strip
  next if title.nil? || title.empty? || url.nil? || url.empty?

  date = item.respond_to?(:pubDate) && item.pubDate ? item.pubDate : item.dc_date
  {
    "title" => title,
    "url" => url,
    "date" => date&.iso8601
  }.compact
end

File.write(OUTPUT_PATH, JSON.pretty_generate(posts) + "\n")
puts "Wrote #{posts.length} posts to #{OUTPUT_PATH}"
rescue StandardError => error
  warn "Could not update latest posts: #{error.message}"
  exit 1
end
