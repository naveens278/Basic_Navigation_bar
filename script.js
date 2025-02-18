const navIndicator = document.querySelector('.nav-indicator');

navLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        const { offsetLeft, offsetWidth } = e.target;
        navIndicator.style.width = `${offsetWidth}px`;
        navIndicator.style.transform = `translateX(${offsetLeft}px)`;
    });
});

document.querySelector('.navbar').addEventListener('mouseleave', () => {
    navIndicator.style.width = '0';
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
