---
layout: default
title: Subdroid Ramblings
---

<div class="profile-section">
  <img src="assets/images/profile.jpg" alt="My Profile Photo" class="profile-photo" id="profile-photo">
</div>

<style>
:root {
  --bg-color: #ffffff;
  --text-color: #111111;
  --link-color: #6366f1;
  --card-bg: #f9f9f9;
}

body.dark-mode {
  --bg-color: #111111;
  --text-color: #eeeeee;
  --link-color: #a855f7;
  --card-bg: #1e1e1e;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
a {
  color: var(--link-color);
}

.profile-section {
  text-align: center;
  margin: 2em 0;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.profile-photo:hover {
  transform: scale(1.05);
}

.magic-link {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background: linear-gradient(45deg, #6366f1, #a855f7);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.magic-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.magic-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: 0.5s;
}

.magic-link:hover::before {
  left: 100%;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Magic URL redirection system
  const links = document.querySelectorAll('a:not([href^="mailto:"])');
  links.forEach(link => {
    if (!link.classList.contains('magic-link')) {
      link.classList.add('magic-link');
    }
    
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('http')) {
        e.preventDefault();
        const destination = this.getAttribute('href');
        
        // Create a floating element that shows the destination
        const floater = document.createElement('div');
        floater.style.position = 'fixed';
        floater.style.top = '50%';
        floater.style.left = '50%';
        floater.style.transform = 'translate(-50%, -50%)';
        floater.style.padding = '20px';
        floater.style.background = 'linear-gradient(45deg, #6366f1, #a855f7)';
        floater.style.color = 'white';
        floater.style.borderRadius = '10px';
        floater.style.zIndex = '1000';
        floater.textContent = `Redirecting to: ${destination}`;
        
        document.body.appendChild(floater);
        
        setTimeout(() => {
          window.location.href = destination;
        }, 1000);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-dark-mode');
  const body = document.body;

  // Load preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleBtn?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
  });
});
</script>

# Subdroid Ramblings

A digital corner for unfinished thoughts, strange ideas, technical experiments, and half-lit dreams.

---

## 🧠 About Me

I’m an explorer of systems — computational, philosophical, biological. I build, write, and sometimes disappear into city shadows with a camera or mic.

---

## ⚙️ Projects

Coming Soon.

---

## 📓 Blog

Coming soon. Essays, dev logs, and stream-of-consciousness posts on AI, ADHD, and systems thinking.

---

## 📷 Photos

Exploring blur, light, and urban loneliness.

> A photo gallery will be embedded here soon using a responsive grid.

---

## 🎵 Music

Sometimes I play, sometimes I listen.  
Here’s a taste of the sonic mess:

---

## 📬 Contact

<!-- Reach me at [your@email.com](mailto:your@email.com). -->

---

## 🌓 Toggle Dark Mode

<button id="toggle-dark-mode" class="magic-link">Toggle Dark Mode</button>

---

## 🔄 Latest Updates

<!-- - 🎥 Film editing begins next week
- 🧪 Training a transformer with spectral regularization
- 📓 Started writing a manual for neurodivergent attention -->

---

*“The glitch is not a bug. The bug is not the end.”*
