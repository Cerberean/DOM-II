// Your code goes here



const navBar = document.querySelector('nav');
navBar.addEventListener('mouseenter',()=>{
    navBar.style.transition="1.5s";
    navBar.style.backgroundColor = "yellow";
});

navBar.addEventListener('mouseleave',()=>{
    navBar.style.transition="1s";
    navBar.style.backgroundColor = "white";
});


const funbusLogo = document.querySelector('.logo-heading');
document.addEventListener("click", ()=>{
    document.querySelector(".logo-heading").innerHTML = "Hello World";
  });



  const changeBodyColor = document.querySelector('body');

  changeBodyColor.addEventListener('keypress', ()=>{
     
      changeBodyColor.style.backgroundColor = 'yellow'; 
  });
  


  window.addEventListener('load', ()=> {
      alert('Fun Bus Website Loaded'); 
  });



const copyWelcomeP = document.querySelector('.intro p')

copyWelcomeP.addEventListener('copy', () => {    
    alert("You copied the paragraph from Welcome to Fun Bus!");
}); 



const welcomeToFunBus = document.querySelector('.intro h2');

welcomeToFunBus.addEventListener('mouseover', ()=>{
    welcomeToFunBus.style.transition='1s';
    welcomeToFunBus.style.fontSize = '4.5rem';
});

welcomeToFunBus.addEventListener('mouseout', ()=>{
    welcomeToFunBus.style.transition='1s';
    welcomeToFunBus.style.fontSize='3.2rem';
})



let dragP = document.querySelector('.intro p')
dragP.addEventListener("drag", ()=>{
    dragP.style.color = "red";
  });



const btnDblClick = document.querySelectorAll('.content-pick .destination .btn'); 

btnDblClick[0].addEventListener("dblclick", ()=>{
    document.location.href = 'http://www.waverlyclt.com/wp-content/uploads/2018/05/home-image-1200x675.jpg';  
});

btnDblClick[1].addEventListener("dblclick", ()=>{
    document.location.href = 'https://cdn.pixabay.com/photo/2017/09/02/01/25/walk-2706093_960_720.jpg';
});

btnDblClick[2].addEventListener('dblclick', ()=>{
    document.location.href = 'https://cdn.hswstatic.com/gif/10-island-getaways-1.jpg';
});