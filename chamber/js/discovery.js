// Use local storage to calculate days between last time accessed
// Get date data
let date = new Date()
let lastDateStr    = localStorage.getItem("lastDate");
let lastMonthStr   = localStorage.getItem("lastMonth");
let lastYearStr    = localStorage.getItem("lastYear");
// Check if the client has ever visited this page
visited = (lastDateStr != null || lastMonthStr != null || lastYearStr != null);
if (!visited) {
    // Store date information
    lastDateStr     = date.getDate().toString();
    lastMonthStr    = date.getMonth().toString();
    lastYearStr     = date.getFullYear().toString();    
    localStorage.setItem("lastDate", lastDateStr);
    localStorage.setItem("lastMonth", lastMonthStr);
    localStorage.setItem("lastYear", lastYearStr);
}
// Compare last accessed time to current date
// Convert strings to numbers
let lastDateInt     = parseInt(lastDateStr);
let lastMonthInt    = parseInt(lastMonthStr);
let lastYearInt     = parseInt(lastYearStr);
// Get today's date
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();
// Compare
let currentSeconds  = Date.UTC(y, m, d)
let lastSeconds     = Date.UTC(lastYearInt, lastMonthInt, lastDateInt)
let difDays = (currentSeconds - lastSeconds) / (1000 * 60 * 60 * 24)
// Change html
if (difDays > 0) {
    document.querySelector('.last-accessed-value').innerHTML = difDays.toString()
}
else {
    document.querySelector('.last-accessed-value').innerHTML = "0"
}
// Store data in local storage
localStorage.setItem("lastDate", d.toString());
localStorage.setItem("lastMonth", m.toString());
localStorage.setItem("lastYear", y.toString());

// Lazy loading
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


// Current date at top of page
const weekDay = date.getDay();
let dateElement = document.querySelector('#date');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + d + ' ' + months[m] + ' ' + y;


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