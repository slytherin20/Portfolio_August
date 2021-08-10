const mobileMenu = document.querySelector('.mobile-menu-container');
const menuIcon = document.querySelector('.menu-tab');
const cancelIcon = document.querySelector('.cancel-tab');
const nameTag = document.querySelector('.homepage-link');
const tabItems = document.querySelector('.tab-items');
const navBar = document.querySelector('.portfolio-nav');
const navbarItems = document.querySelectorAll('.item');
const navLink = document.querySelectorAll(".nav-popup");
const closePopUpBtn = document.querySelectorAll(".close-popup");
//Navbar toggle

function changeNavbar(){
    let scrollValue = this.scrollY;
    if(scrollValue>240){
        navbarItems.forEach((item)=> item.classList.replace('item','colored-navbar-item'));
        nameTag.style.setProperty('display','inline');
        tabItems.style.setProperty('padding','10px');
        navBar.style.setProperty('background-color','rgba(14, 13, 13, 0.973)');
    }
    else{
        navbarItems.forEach((item)=> item.classList.replace('colored-navbar-item','item'));
        nameTag.style.setProperty('display','none');
        tabItems.style.setProperty('padding','30px');
        navBar.style.removeProperty('background-color');

    }
}
window.addEventListener('scroll',changeNavbar);
navLink.forEach((link)=> link.addEventListener("click",navPopUp))
closePopUpBtn.forEach((btn)=> btn.addEventListener("click",closePopUp))

// Changing navbar for small screen
function navPopUp(){
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    cancelIcon.classList.add('visible');
}

function closePopUp(){
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    cancelIcon.classList.remove('visible');
}