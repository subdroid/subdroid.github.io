---
layout: default
title: Blog Posts
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <div class="container">
        <section class="section animate-in">
            <h1>Blog Posts</h1>
            <p>Essays, dev logs, and stream-of-consciousness posts on AI, ADHD, and systems thinking.</p>
            
            <div class="posts">
                {% for post in site.posts %}
                <article class="post-preview animate-in">
                    <h2><a href="{{ post.url }}" class="magic-link">{{ post.title }}</a></h2>
                    <div class="post-meta">
                        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                    </div>
                    {% if post.description %}
                    <p>{{ post.description }}</p>
                    {% endif %}
                </article>
                {% endfor %}
            </div>
        </section>

        <footer class="section animate-in">
            <p><a href="/" class="magic-link">← Back to Home</a></p>
        </footer>
    </div>

    <script src="/assets/js/main.js"></script>
</body>
</html> 