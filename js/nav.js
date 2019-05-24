const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const mainSection = document.querySelector('.home-main-section');

    // toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.classList.toggle('hide-element');
        // animate nav links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                mainSection.classList.remove('blur-content');
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                mainSection.classList.add('blur-content');
            }
        });
        // animate burger
        burger.classList.toggle('toggle');
    });
}

navSlide();