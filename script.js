const nav = document.getElementById('navigation');
const socials = document.getElementById('socials');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');
const logo = document.getElementById('logo');

burger.addEventListener('click', function(){

nav.classList.toggle('hidden'); 
socials.classList.toggle('hidden');

header.classList.toggle('flex-col');
header.classList.toggle('gap-2');
header.classList.toggle('min-h-screen');
header.classList.toggle('bg-stone-200');
header.classList.toggle('opacity-95');
navLinks.classList.toggle('flex-col');
navLinks.classList.toggle('text-center');
navLinks.classList.toggle('gap-2');
navLinks.classList.toggle('text-black');
socials.classList.toggle('flex');
socials.classList.toggle('invert');
logo.classList.toggle('text-black');



}
);

navLinks.addEventListener('click',function(){
    nav.classList.toggle('hidden'); 
socials.classList.toggle('hidden');

header.classList.remove('flex-col');
header.classList.remove('gap-2');
header.classList.remove('min-h-screen');
header.classList.remove('bg-stone-200');
header.classList.remove('opacity-95');
navLinks.classList.remove('flex-col');
navLinks.classList.remove('text-center');
navLinks.classList.remove('gap-2');
navLinks.classList.remove('text-black');
socials.classList.remove('flex');
socials.classList.remove('invert');
logo.classList.remove('text-black');
burger.classList.remove('hidden');
})

