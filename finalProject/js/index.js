const year = document.querySelector(".one").textContent = new Date().getFullYear();
const lastModified = document.lastModified;
// Hamburger menu
const hambutton = document.querySelector('.hamburger');
const mainNav = document.querySelector('.link-list')
document.querySelector('#modified').innerHTML = lastModified;

hambutton.addEventListener('click', () => 
    {mainNav.classList.toggle('responsive')}, false);
