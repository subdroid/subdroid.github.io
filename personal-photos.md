---
layout: default
title: Personal Photos
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/photos.css">
    <link rel="stylesheet" href="/assets/css/lightbox.css">
</head>
<body>
    <div class="container">
        <section class="section animate-in">
            <h1>Personal Photos</h1>
            <p>A collection of moments from my personal life.</p>
            
            <div class="photo-grid">
                <!-- Example photo cards - replace src with your actual image paths -->
                <div class="photo-card">
                    <img src="/assets/images/photos/sample1.jpg" alt="Sample Photo 1" loading="lazy" data-lightbox data-lightbox-group="gallery">
                    <div class="photo-info">
                        <h3>Urban Nights</h3>
                        <p>Downtown lights reflecting off rain-slicked streets</p>
                    </div>
                </div>
                
                <div class="photo-card">
                    <img src="/assets/images/photos/sample2.jpg" alt="Sample Photo 2" loading="lazy" data-lightbox data-lightbox-group="gallery">
                    <div class="photo-info">
                        <h3>City Blur</h3>
                        <p>Motion and light creating abstract urban patterns</p>
                    </div>
                </div>
                
                <div class="photo-card">
                    <img src="/assets/images/photos/sample3.jpg" alt="Sample Photo 3" loading="lazy" data-lightbox data-lightbox-group="gallery">
                    <div class="photo-info">
                        <h3>Quiet Moments</h3>
                        <p>Finding stillness in the chaos of the city</p>
                    </div>
                </div>
            </div>
            
            <div class="navigation">
                <p><a href="/" class="magic-link">← Home</a> | <a href="/travel-photos" class="magic-link">Travel Photos</a> | <a href="/photography" class="magic-link">Photography</a></p>
            </div>
        </section>
    </div>

    <script src="/assets/js/main.js"></script>
    <script src="/assets/js/lightbox.js"></script>
    <script>
        // Add loading state to images
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.photo-card img');
            images.forEach(img => {
                img.parentElement.classList.add('loading');
                img.onload = () => {
                    img.parentElement.classList.remove('loading');
                };
            });
        });
    </script>
</body>
</html> 