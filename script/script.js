const nav = document.getElementById('navigation');
const socials = document.getElementById('socials');
const burger = document.getElementById('burger');
const burgerContainer = document.getElementById('burger_container');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menuLinks = document.querySelectorAll('#nav-links a');
const toggleElements = [logo, header, nav, navLinks, socials, burgerContainer];

burger.addEventListener('click', function(){
    toggleElements.forEach(element => {
        element.classList.toggle('active');
        
    })
}
);
menuLinks.forEach(link => {
    link.addEventListener('click',function(){
        toggleElements.forEach(element => {
            
            element.classList.remove('active');
            
        })
    })
})




    




