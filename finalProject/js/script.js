const year = document.querySelector(".one").textContent = new Date().getFullYear();
const lastModified = document.lastModified;
document.querySelector('#modified').innerHTML = lastModified;
// Hamburger menu
const hambutton = document.querySelector('.hamburger');
const mainNav = document.querySelector('.link-list')

hambutton.addEventListener('click', () => 
    {mainNav.classList.toggle('responsive')}, false);
