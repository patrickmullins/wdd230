// Create directors' contacts
fetch('/chamber/data/contact.json')
    .then(response => response.json(),)
    .then (data => {
        let cardNum = 0;
        for (i in data.directors) {
            cardNum += 1;
            // Make elements
            const div   = document.createElement('div');
            const img   = document.createElement('img');
            const name  = document.createElement('p');
            const nameB = document.createElement('b');
            const email = document.createElement('p');
            // Add content
            // Add image content
            const path = data.directors[i].image;
            if (path != '') {
                const imgUrl = '/chamber/images/' + path;
                (async () => {
                    const response = await fetch(imgUrl);
                    const imageBlob = await response.blob();
                    const reader = new FileReader();
                    reader.readAsDataURL(imageBlob);
                    reader.onloadend = () => {
                        const base64data  = reader.result;
                        img.src = base64data;
                    };
                })();
            }
            img.alt = data.directors[i].name + 'portrait image';
            // name & email
            nameB.innerHTML = data.directors[i].name;
            email.innerHTML = 'Email: ' + data.directors[i].email;

            // Add class names
            img.classList.add('contact-img');
            div.classList.add('card');
            const cardNumText = "contact-card" + cardNum.toString();
            div.classList.add(cardNumText);
    
            // Append children to parent
            const contacts = document.querySelector('.directors-contacts');
            name.appendChild(nameB);
            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(email);
            contacts.appendChild(div);
        }
    });
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
