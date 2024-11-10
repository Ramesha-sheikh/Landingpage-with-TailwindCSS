//  Get button and menu elements
var navbar = document.getElementById('nav');
var menuBtn = document.getElementById('menu-btn');
var mobileMenu = document.getElementById('mobile-menu');
// Add event listener to toggle menu
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});
