const apikey="2b521d12aade0106e53cfd6eeef2055c";
    let image=document.querySelector('.weather-icon');
    async function checkweather(city) {
        const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
        const response=await fetch(apiurl);
        if(response.status==404)
        {
            document.querySelector('.error').style.display="block";
        }else{
        var data=await response.json();

        document.querySelector('.city').textContent=data.name;
        document.querySelector('.temp').textContent=Math.round(data.main.temp)+"°C";
        document.querySelector('.humidity').textContent=data.main.humidity+"%";
        document.querySelector('.wind').textContent=data.wind.speed+" km/h";
        if(data.weather[0].main=="Clouds")
    {
        image.src="images/clouds.png";
    }
     else if(data.weather[0].main=='Clear'){
        image.src="images/clear.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        image.src="images/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        image.src="images/mist.png";
    }
    else if(data.weather[0].main=='Snow'){
        image.src="images/snow.png";
    }
    else if(data.weather[0].main=='Rain')
    {
        image.src="images/rain.png";
    }
    document.querySelector('.error').style.display="none";
    }
    }
    document.getElementById('demo').addEventListener('click',function(){const city=document.getElementById('city-input').value
    if(city)
    {
        checkweather(city);
    }
    else{
        alert('Please enter a city name:');
    }
});