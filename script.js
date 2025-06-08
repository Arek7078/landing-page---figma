const nav = document.getElementById('navigation');
const socials = document.getElementById('socials');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');

burger.addEventListener('click', function(){

nav.classList.toggle('hidden'); 
socials.classList.toggle('hidden');
header.classList.toggle('flex-col');
header.classList.toggle('gap-2');
navLinks.classList.toggle('flex-col');
navLinks.classList.toggle('text-center');
navLinks.classList.toggle('gap-2');
socials.classList.toggle('flex');


})