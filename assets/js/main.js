/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
function blurHeader(){
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
function contactFormHandler(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    event.target.reset();
}

const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', contactFormHandler);
}

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: false
})

// Home section animations
sr.reveal('.home__content', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 300
})

sr.reveal('.home__image', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 500
})

// Works section animations
sr.reveal('.work__item', {
    interval: 200,
    origin: 'bottom',
    distance: '50px'
})

// Info section animations
sr.reveal('.info__content', {
    origin: 'left',
    distance: '60px',
    duration: 1800
})

sr.reveal('.info__image', {
    origin: 'right',
    distance: '60px',
    duration: 1800,
    delay: 200
})

// Services section animations
sr.reveal('.services__item', {
    interval: 150,
    origin: 'bottom',
    distance: '40px',
    duration: 1600
})

// Contact section animations
sr.reveal('.contact__content', {
    origin: 'bottom',
    distance: '60px',
    duration: 2000
})

// Footer animations
sr.reveal('.footer__container', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500
})

// Section titles
sr.reveal('.section__title', {
    origin: 'top',
    distance: '40px',
    duration: 1200
})

// Buttons
sr.reveal('.button', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 600
})

/*=============== ADDITIONAL FUNCTIONALITY ===============*/

// Smooth scrolling for anchor links
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

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
    }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class to body for any initial animations
    document.body.classList.add('loaded');
    
    // Re-trigger ScrollReveal after all content is loaded
    setTimeout(() => {
        if (typeof sr === 'object' && sr.sync) {
            sr.sync();
        }
    }, 1000);
});
