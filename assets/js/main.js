// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    toggleBtn?.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', mode);
    });

    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}); 