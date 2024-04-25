
const key = "3c13867a590b54fd8a73772048323027";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkCurrentWeather(city){
    const result = await fetch(apiUrl + city +`&appid = ${key}`);
    if(result.status == 404){
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await result.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
  }
searchBtn.addEventListener("click",()=>{
    checkCurrentWeather(cityName.value);
})
