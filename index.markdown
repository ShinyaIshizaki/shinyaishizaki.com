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
    <a href="https://tech-blog.shinyaishizaki.com/" target="_blank" rel="noopener noreferrer">Tech Blog</a>
  </p>
  <p>
    <a href="https://mental-health.shinyaishizaki.com/" target="_blank" rel="noopener noreferrer">Mental Health Blog</a>
  </p>
  <p>
    <a href="https://menta.work/invite/YM2SJ2tSsrEeMyQv" target="_blank" rel="noopener noreferrer" class="menta-link">
      <span class="menta-label">MENTA<br><small>Mentoring Service</small></span>
      <img src="https://menta.work/resource/img/syokai01.png" alt="MENTA メンター紹介" loading="lazy">
    </a>
  </p>
</section>

<section class="skills-overview">
  <h2>Core Skills</h2>
  <div class="skills-grid">
    <article class="skill-card">
      <h3>Backend Development</h3>
      <p>Building reliable server-side systems and APIs.</p>
    </article>
    <article class="skill-card">
      <h3>Web Applications</h3>
      <p>Creating practical and maintainable web products.</p>
    </article>
    <article class="skill-card">
      <h3>Cloud Infrastructure</h3>
      <p>Supporting deployment workflows and scalable environments.</p>
    </article>
    <article class="skill-card">
      <h3>Software Engineering</h3>
      <p>Applying strong engineering habits to solve real problems.</p>
    </article>
    <article class="skill-card">
      <h3>Technical Writing</h3>
      <p>Explaining complex topics in a clear and approachable way.</p>
    </article>
  </div>
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
