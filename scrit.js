const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('vl');

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});