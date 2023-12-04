const baseURL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';

const temperatureBaseURL = "";
var cityName = "";

var btn = document.getElementById('search');



btn.addEventListener('click',  getResults = async () => {
    
    cityName = document.getElementById('city-name').value;


    const res = await fetch(`${baseURL}${cityName}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee8a416730msh6f8369968a2ff0cp1950b9jsnd0fbc76db09a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      },
    })
    
    const data = await res.json();
    const {current} = data;
   const {temp_c, humidity , wind_kph} = current;
   console.log(temp_c);
   console.log(humidity);
   console.log(wind_kph);
  
  document.getElementById('city-report').innerText = `${cityName} weather details`;
  document.getElementById('temp').innerText = `${temp_c} C`;
  document.getElementById('humidity').innerText = `${humidity}`;
  document.getElementById('wind').innerText = `${wind_kph} Km/h`;
    

});
