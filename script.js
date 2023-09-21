// c99c3a56066c5bd2733609e4792bf20e  -> api key 
// https://api.openweathermap.org/data/2.5/weather?q=jorhat&appid=c99c3a56066c5bd2733609e4792bf20e&units=metric  -> api URL

const apiKey = "c99c3a56066c5bd2733609e4792bf20e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

checkWeather();

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})