

//  Get button and menu elements

 const navbar = document.getElementById('nav') as HTMLElement;
 const menuBtn = document.getElementById('menu-btn') as HTMLButtonElement ;
 const mobileMenu = document.getElementById('mobile-menu')   as HTMLDivElement;
    

 // Add event listener to toggle menu
 menuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
   
 });



