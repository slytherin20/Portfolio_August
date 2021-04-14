const nameTag = document.querySelector('.homepage-link');
const tabItems = document.querySelector('.tab-items');
const navBar = document.querySelector('.portfolio-nav');
const navbarItems = document.querySelectorAll('.item');
const endMarker = document.querySelector('.end-marker');
const myName = document.querySelector('.name');
const myJob = document.querySelector('.job');
const mobileMenu = document.querySelector('.mobile-menu-container');
const menuIcon = document.querySelector('.menu-tab');
const cancelIcon = document.querySelector('.cancel-tab');

// Headline
function changeTitle(){
    if(!myJob.classList.contains('visible')){
        myName.classList.toggle('visible');
    }
    if(!myName.classList.contains('visible')){
        myJob.classList.toggle('visible');
        
    }
}
window.setInterval(changeTitle,1000);


// Marker toggle 
function toggleMarker(){
    endMarker.classList.toggle('hidden-marker');

}
window.setInterval(toggleMarker,700);



//Navbar toggle

function changeNavbar(){
    let scrollValue = this.scrollY;
    if(scrollValue>240){
        navbarItems.forEach((item)=> item.classList.replace('item','colored-navbar-item'));
        nameTag.style.setProperty('display','inline');
        tabItems.style.setProperty('padding','10px');
        navBar.style.setProperty('background-color','gold');
    }
    else{
        navbarItems.forEach((item)=> item.classList.replace('colored-navbar-item','item'));
        nameTag.style.setProperty('display','none');
        tabItems.style.setProperty('padding','30px');
        navBar.style.removeProperty('background-color');

    }
}
window.addEventListener('scroll',changeNavbar);

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