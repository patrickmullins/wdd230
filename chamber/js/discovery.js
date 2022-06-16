
let date = new Date()
let lastDateStr    = localStorage.getItem("lastDate");
let lastMonthStr   = localStorage.getItem("lastMonth");
let lastYearStr    = localStorage.getItem("lastYear");

visited = (lastDateStr != null || lastMonthStr != null || lastYearStr != null);
if (!visited) {
    
    lastDateStr     = date.getDate().toString();
    lastMonthStr    = date.getMonth().toString();
    lastYearStr     = date.getFullYear().toString();    
    localStorage.setItem("lastDate", lastDateStr);
    localStorage.setItem("lastMonth", lastMonthStr);
    localStorage.setItem("lastYear", lastYearStr);
}

let lastDateInt     = parseInt(lastDateStr);
let lastMonthInt    = parseInt(lastMonthStr);
let lastYearInt     = parseInt(lastYearStr);
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();
let currentSeconds  = Date.UTC(y, m, d)
let lastSeconds     = Date.UTC(lastYearInt, lastMonthInt, lastDateInt)
let difDays = (currentSeconds - lastSeconds) / (1000 * 60 * 60 * 24)

if (difDays > 0) {
    document.querySelector('.last-accessed-value').innerHTML = difDays.toString()
}
else {
    document.querySelector('.last-accessed-value').innerHTML = "0"
}
localStorage.setItem("lastDate", d.toString());
localStorage.setItem("lastMonth", m.toString());
localStorage.setItem("lastYear", y.toString());

const images = document.querySelectorAll('[data-src]');
const options = { threshold: [.5] } 
function preloadImage(img) { 
    const source = img.getAttribute('data-src'); 
    img.src = source; 
} 
const io = new IntersectionObserver( (entries, io) => {
     entries.forEach(entry => {
        if(!entry.isIntersecting){ 
            return; 
        } 
        else { 
            preloadImage(entry.target); 
            io.unobserve(entry.target); 
        } 
    }); 
}, options); 
images.forEach(images => { io.observe(images); });



const weekDay = date.getDay();
let dateElement = document.querySelector('#date');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + d + ' ' + months[m] + ' ' + y;



const hambutton = document.querySelector('.hamburger');
const mainNav = document.querySelector('.link-list')

hambutton.addEventListener('click', () => 
    {mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {
    if (window.innerWidth > 760)
    {
        mainNav.classList.remove()
    }
};