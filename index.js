/*=============== SHOW MENU ===============*/
// Constantes des éléments du menu de navigation. 
const contactSubmitButton = document.getElementById('contact-submit');
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
// Valide l'existence de la constante
if (navToggle) {
    // Ajoute la classe 'show-menu' à 'navMenu' lorsqu'on clique sur 'navToggle'.
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
// Valide l'existence de la constante
if (navClose) {
    // Supprime la classe 'show-menu' de 'navMenu' lorsqu'on clique sur 'navClose'.
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Constantes qui récupèrent tous les éléments de la classe 'nav__link'.
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // Supprime la classe 'show-menu' de 'navMenu' lorsqu'on clique sur un lien de navigation.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Ajoute ou supprime la classe 'shadow-header' à 'header' en fonction du défilement de la page.
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

/** FONCTIONNEMENT SCROLL SECTIONS ACTIVE LINK
 * Ajoute ou supprime la classe 'active-link' aux éléments de la barre de navigation en fonction de la position de défilement de la fenêtre.
 * Lorsque la position de défilement de la fenêtre est entre le haut de la section et le bas de la section (hauteur de la section),
 * la classe 'active-link' est ajoutée à l'élément de navigation correspondant.
 * Sinon, la classe 'active-link' est supprimée.
 */
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {

    e.preventDefault();
    contactSubmitButton.innerHTML = '<i class="ri-send-plane-line"></i> Sending...';
    contactSubmitButton.disabled = true;


    emailjs.sendForm('service_mwkeus4', 'template_fcz7dh1', '#contact-form', '7PVS1hz0DZW25RU4y')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
            submitbutton.textContent = 'Send Message'

        }, (error) => {
            contactMessage.textContent = 'Message not sent (service error) ❌';
            console.error('EmailJS Error:', error);
            submitbutton.textContent = 'Send Message'
        })
        .finally(() => {
            // Reset button text and enable it
            contactSubmitButton.innerHTML = '<i class="ri-send-plane-line"></i> Send Message';
            contactSubmitButton.disabled = false;
        });
};
contactForm.addEventListener('submit', sendEmail)
