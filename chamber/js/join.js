// Open thankyou.html when user submits
let sayThankYou = () => {
    window.open('https://patrickmullins.github.io/wdd230/chamber/thankYou.html',
    '_blank');
};

document.querySelector('.join-submit-btn').addEventListener('click', 
    sayThankYou);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760)
    {
        mainNav.classList.remove()
    }
};
