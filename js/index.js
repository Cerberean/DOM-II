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



const introImg = document.querySelector('.intro img');

introImg.addEventListener("drag", ()=>{
    introText.style.transition = "2s";
    introText.style.color = "blue";
});

introImg.addEventListener("dragend", ()=>{
    introText.style.transition = "2s";
    introText.style.color = "black";
});



const introText = document.querySelector('.intro p');

const introTextWords = introText.innerText;

introText.addEventListener("dblclick", ()=>{
    const introTextInner = introText.innerText;
    const textInterval = setInterval(()=>{
        introText.innerText = introTextInner;
        introTextInner = introTextInner.slice(0,-1);
        if(introTextInner.length == 0){
            introText.innerText = introTextWords;
            clearInterval(textInterval);
        }
    }, 50);
});



const contentImg = document.querySelectorAll('.content-section img');

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima aliquid, voluptatem deleniti nesciunt repellat eius explicabo culpa qui vero ex laborum sit at fuga repudiandae assumenda amet nisi hic."



const focusP = document.querySelectorAll('.focus p');

focusP[0].addEventListener('contextmenu', ()=>{
    focusP[0].innerText = lorem;
});

focusP[1].addEventListener('click', (event)=>{
    focusP[1].innerText = "Propagation has been stopped!";
    event.stopPropagation()
});

const propa = document.querySelector('.text-content.focus');

propa.addEventListener('click', ()=>{
    TweenMax.to(focusP, 6, {color:"red", backgroundColor: "purple"});
});