// Important globals
const date = new Date();
const year = date.getFullYear();
const lastModified = document.lastModified;
const month = date.getMonth();
const monthDay = date.getDate();
const weekDay = date.getDay();

// Hamburger menu
const hambutton = document.querySelector('.hamburger');
const mainNav = document.querySelector('.link-list')

hambutton.addEventListener('click', () => 
    {mainNav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760)
    {
        mainNav.classList.remove()
    }
};

if (weekDay != 1 && weekDay != 2) {
    document.querySelector('#msg').style.display = 'none';
}
// Footer year and last modified update

document.querySelector('#copyrightYear').innerHTML = year;
document.querySelector('#modified').innerHTML = lastModified;

// Current date at top of page
let dateElement = document.querySelector('#date');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + monthDay + ' ' + months[month] + ' ' + year;
