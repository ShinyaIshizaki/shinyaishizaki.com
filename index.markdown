---
layout: page
title: "Shinya Ishizaki"
permalink: /
---

<section class="hero">
  <h1>Hello, I’m Shinya Ishizaki.</h1>
  <p>
    I work as a software engineer while sharing knowledge and insights about technology and mental health care through my blog.
  </p>
</section>

<section class="landing-links">
  <p>
    <a href="https://tech-blog.shinyaishizaki.com/">Tech Blog</a>
  </p>
  <p>
    <a href="https://mental-health.shinyaishizaki.com/">Mental Health Blog</a>
  </p>
</section>

<section class="skills-overview">
  <h2>Core Skills</h2>
  <ul>
    <li>Backend Development</li>
    <li>Web Applications</li>
    <li>Cloud Infrastructure</li>
    <li>Software Engineering</li>
    <li>Technical Writing</li>
  </ul>
</section>

<section class="latest-posts">
  <h2>Latest Posts</h2>
  <ul>
    {% for post in site.posts limit: 5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span>{{ post.date | date: "%Y/%m/%d" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
