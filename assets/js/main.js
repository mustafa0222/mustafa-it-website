// =============== MENU FUNCTIONALITY ===============
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close Menu When Clicking on Links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// =============== BLUR HEADER ===============
function blurHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}
window.addEventListener('scroll', blurHeader);

// =============== SCROLL UP ===============
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// =============== ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// =============== CONTACT FORM ===============
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name') || 'User';
        
        // Show success message
        alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// =============== SMOOTH SCROLL ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============== SCROLL REVEAL ANIMATIONS ===============
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if ScrollReveal is available
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            reset: false
        });

        // Home animations
        sr.reveal('.home__content', { 
            origin: 'left',
            distance: '100px',
            duration: 2000,
            delay: 300
        });
        
        sr.reveal('.home__image', { 
            origin: 'right',
            distance: '100px',
            duration: 2000,
            delay: 500
        });

        // Section titles
        sr.reveal('.section__title', {
            duration: 1500,
            delay: 200
        });

        // Work items
        sr.reveal('.work__item', {
            interval: 200,
            origin: 'bottom',
            distance: '50px'
        });

        // About section
        sr.reveal('.about__content', {
            origin: 'left',
            distance: '80px',
            duration: 1800
        });

        sr.reveal('.about__image', {
            origin: 'right',
            distance: '80px',
            duration: 1800,
            delay: 300
        });

        // Services items
        sr.reveal('.services__item', {
            interval: 150,
            origin: 'bottom',
            distance: '60px'
        });

        // Contact form
        sr.reveal('.contact__form', {
            origin: 'bottom',
            distance: '80px',
            duration: 2000
        });
    }

    // Add loaded class for any CSS transitions
    document.body.classList.add('loaded');

    // Initial function calls
    blurHeader();
    scrollUp();
    scrollActive();
});

// =============== CLOSE MENU WHEN CLICKING OUTSIDE ===============
document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnToggle = navToggle.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// =============== LOADING ANIMATIONS ===============
window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
});

// Clients section animations
sr.reveal('.clients__description', {
    origin: 'top',
    distance: '40px',
    duration: 700
});

sr.reveal('.client__item', {
    interval: 100,
    origin: 'bottom',
    distance: '30px',
    duration: 1000
});
