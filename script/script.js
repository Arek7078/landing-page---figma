const nav = document.getElementById('navigation');
const socials = document.getElementById('socials');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');
const logo = document.getElementById('logo');

burger.addEventListener('click', function(){
    logo.classList.toggle('active');
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navLinks.classList.toggle('active');
    socials.classList.toggle('active');
}
);
navLinks.addEventListener('click', function(){
    logo.classList.remove('active');
    header.classList.remove('active');
    nav.classList.remove('active');
    navLinks.classList.remove('active');
    socials.classList.remove('active');
}
);


    




