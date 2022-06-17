const date = new Date();
const month = date.getMonth();
const monthDay  = date.getDate();
const weekDay       = date.getDay();
const year      = date.getFullYear();
const dateTime = {
    "month": month, 
    "date": monthDay, 
    "year": year,
    "hours": date.getHours(),
    "minutes": date.getMinutes(),
    "seconds": date.getSeconds()
};
document.querySelector('.time-loaded').value = dateTime;


let sayThankYou = () => {
    window.open('https://patrickmullins.github.io/wdd230/chamber/thankYou.html');
};

document.querySelector('.join-submit-btn').addEventListener('click', sayThankYou);

window.onresize = () => {
    if (window.innerWidth > 760)
    {
        mainNav.classList.remove()
    }
};

let dateElement = document.querySelector('#date');
document.querySelector('#copyrightYear').innerHTML = year;
// gets current day / month
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + monthDay + ' ' + months[month] + ' ' + year;