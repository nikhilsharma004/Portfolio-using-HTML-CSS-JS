function toggleMenu() {
    const navMenu = document.querySelector('.right'); 
    navMenu.classList.toggle('show'); 
}

function closeMenu() {
    const menu = document.querySelector('.right');
    menu.classList.remove('show'); 
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.right ul li a');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
