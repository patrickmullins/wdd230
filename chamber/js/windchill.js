fetch('http://api.openweathermap.org/data/2.5/weather?lat=43&lon=-111&'+
  'units=imperial&appid=b1cc209439f1596ec11f47f851d9a685')
.then(response => response.json())
.then(data => {
  const tempF     = Math.round(data.main.temp);
  const condition = data.weather[0].main;
  const wSpeed    = data.wind.speed;

  // Calculate wind chill only if wind speed > 3mph
  if (wSpeed > 3) {
    const wChill = Math.round((35.74 + (0.6215 * tempF))-(35.75 * Math.pow(wSpeed,0.16)) + 
      (0.4275*tempF*Math.pow(wSpeed,0.16)));
      
    let wChillText = String(wChill) + " \xB0F";
    document.querySelector(".wind-chill-value").innerHTML = wChillText;
  }
  else {
    let wChillText = "N/A";
    document.querySelector(".wind-chill-value").innerHTML = wChillText;
  }
  
  var wSpeedText = String(wSpeed) + " mph"
  document.querySelector(".wind-speed-value").innerHTML     = wSpeedText;
  document.querySelector('.temp').innerHTML                 = String(tempF) + " \xB0F";
  document.querySelector('.weather-description').innerHTML  = condition;

  // Set weather image appropriately
  const weatherImg  = document.querySelector('.weather-img');
  const icon        = data.weather[0].icon.toString();

  (async () => {
    const imageUrl = 'http://openweathermap.org/img/wn/' + icon + '@4x.png';
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      const base64data = reader.result;
      weatherImg.src = base64data;
    };
  })();
});

// Helpful site for these calculations: 
// https://codepen.io/mintnerknown/pen/aQbORY