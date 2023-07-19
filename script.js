const apikey="39f94835dd9570c56bfd38e13093f8bf";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=39f94835dd9570c56bfd38e13093f8bf&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiurl + city);
    var data=await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + "Km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weathericon.src="images/clouds.png";
            break;
        case "Clear":
            weathericon.src="images/clear.png";
            break;
        case "Rain":
            weathericon.src="images/rain.png";
            break;
        case "Drizzle":
            weathericon.src="images/drizzle.png";
            break;
        case "Mist":
            weathericon.src="images/mist.png";
            break;
        default:
            console.log("No weather icon available.");
    }    
    
}    

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})