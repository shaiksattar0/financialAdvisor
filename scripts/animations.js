// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-up, .slide-left');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', animateOnScroll);