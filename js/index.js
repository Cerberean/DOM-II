// Your code goes here

// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick



const navBar = document.querySelector('nav');
navBar.addEventListener('mouseenter',()=>{
    navBar.style.transition="1.5s";
    navBar.style.backgroundColor = "yellow";
});

navBar.addEventListener('mouseleave',()=>{
    navBar.style.transition="1s";
    navBar.style.backgroundColor = "white";
});

const anchors = document.querySelectorAll('a');



const funbusLogo = document.querySelector('.logo-heading');

funbusLogo.addEventListener('mouseover', ()=>{
    funbusLogo.style.transition="0.5s";
    funbusLogo.style.fontSize = "7rem";
});

funbusLogo.addEventListener('mouseout', ()=>{
    funbusLogo.style.transition="2s";
    funbusLogo.style.fontSize = "5rem";
});

funbusLogo.addEventListener('transitionstart', ()=>{
    contentImg[0].style.transition = "4s";
    contentImg[0].style.width = "40%";
});

funbusLogo.addEventListener('transitionend', ()=>{
    contentImg[0].style.transition = "2s";
    contentImg[0].style.width = "100%";
});



