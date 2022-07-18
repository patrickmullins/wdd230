
const cardsBox  = document.querySelector('.bus-cards-box');
const listBox   = document.querySelector('.bus-list-box');


fetch('data/data.json')
    .then(response => response.json())
    .then (data => {
        makeCards(data);
        makeList(data);
    });

function makeCards(busData) {
    
    let cardNum = 0;
    for (let key in busData) {
        cardNum += 1;
        const business = busData[key];

        
        const card      = document.createElement('div');
        const img       = document.createElement('img');
        const infoBox   = document.createElement('div');
        const info   = document.createElement('p');
        const name      = document.createElement('p');
        const nameB     = document.createElement('b');
        const address   = document.createElement('p');
        const phone     = document.createElement('p');
        const hours     = document.createElement('p');
        const URL       = document.createElement('p');
        const URLLink   = document.createElement('a');
        const membership   = document.createElement('p');

       
        card.classList  .add("card");
        img.classList   .add("bus-logo");
        infoBox.classList.add('info-box');
        infoBox.classList.add('info');
        URLLink.classList.add("bus-link");

        
        const imgFilepath = business.image;
        if (imgFilepath != '') {
            const imageUrl = 'images/' + imgFilepath.toString();
            (async () => {
                const response = await fetch(imageUrl);
                const imageBlob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                  const base64data = reader.result;
                  img.src = base64data;
                };
              })();
        }
        img.alt             = business.name + " logo";
        nameB.innerHTML     = business.name;
        address.innerHTML   = business.address;
        phone.innerHTML     = business.phone;
        hours.innerHTML     = business.hours;
        membership.innerHTML = business.membership;
        info.innerHTML = business.info;
        URLLink.href        = business.website;
        

        
        name    .appendChild(nameB);
        URL     .appendChild(URLLink);
        infoBox .appendChild(name);
        infoBox .appendChild(address);
        infoBox .appendChild(info);
        infoBox .appendChild(hours);
        card    .appendChild(img);
        card    .appendChild(infoBox);
        cardsBox.appendChild(card);
    }
}

function makeList(busData) {
    
    let cardNum = 0;
    for (let key in busData) {
        cardNum += 1;
        const business = busData[key];

        
        const div = document.createElement('div');
        div.className = "bus-li";

        
        const name      = document.createElement('p');
        const info      = document.createElement('p');
        const nameB     = document.createElement('b');
        const address   = document.createElement('p');
        const phone     = document.createElement('p');
        const URL       = document.createElement('p');
        const URLLink   = document.createElement('a');
        URLLink.classList   .add("bus-link");
        nameB.innerHTML     = business.name;
        address.innerHTML   = business.address;
        phone.innerHTML     = business.phone;
        info.innerHTML     = business.info;
        URLLink.href        = business.website;
        URLLink.innerHTML   = "Website";

        
        name.appendChild(nameB);
        URL.appendChild(URLLink);

        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(info);

       
        listBox.appendChild(div);
    }
}


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const mediumView    = (vw >= 800 && vw < 1000);

if (mediumView) {
    cardsBox.style.display  = 'none';
    listBox.style.display   = 'block';
}


const cardsBtn  = document.querySelector('.card-btn');
const listBtn   = document.querySelector('.list-btn');

cardsBtn.onclick = function() {
    cardsBox.style.display  = 'grid';
    listBox.style.display   = 'none';
};

listBtn.onclick = function() {
    cardsBox.style.display  = 'none';
    listBox.style.display   = 'block';
};


const year = document.querySelector(".one").textContent = new Date().getFullYear();

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