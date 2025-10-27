/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId, closeId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          close = document.getElementById(closeId)

    if(toggle && nav && close){
        toggle.addEventListener('click', () =>{
            nav.classList.add('show-menu')
        })
        
        close.addEventListener('click', () =>{
            nav.classList.remove('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu', 'nav-close')

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
    // When the scroll is greater than 50 viewport height, add the blur-header class
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
    // When the scroll is higher than 350 viewport height, add the show-scroll class
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
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Check if ScrollReveal is available
if (typeof ScrollReveal !== 'undefined') {
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
    sr.reveal('.contact__form', {
        origin: 'bottom',
        distance: '60px',
        duration: 2000
    })

    // Section titles
    sr.reveal('.section__title', {
        origin: 'top',
        distance: '40px',
        duration: 1200
    })
}

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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Check if menu elements exist
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    
    console.log('Menu elements:', { navToggle, navMenu, navClose });
    
    // Add loaded class for any initial animations
    document.body.classList.add('loaded');
});
