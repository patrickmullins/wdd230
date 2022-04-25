const date2 = document.querySelector('#currentdate2');
try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric')};
    date2.textContent = new Date().toLocaleDateString('en-US', options);
}
catch (e) {
    alert('Error with code or your browser does not support Locale');
}