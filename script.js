/* ----------------------------------------------- */
/* SCRIPT.JS - ITALIAN BEER SCHOOL                */
/* ----------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const menuPopUp = document.querySelector('.menu-pop-up');
    const closeMenuBtn = document.querySelector('.close-menu');

    // Funzione per aprire/chiudere il menu
    function toggleMenu() {
        if (menuPopUp && hamburgerBtn) {
            menuPopUp.classList.toggle('open');
            hamburgerBtn.classList.toggle('open');
        }
    }

    // Eventi al click
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMenu);
    }

    // Chiude il menu se si clicca fuori dall'area del menu
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuPopUp.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && menuPopUp.classList.contains('open')) {
            toggleMenu();
        }
    });
});
