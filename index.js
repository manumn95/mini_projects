let api = "57a85b994640d1875636255e7ff2d10c";
let search = document.querySelector(".form-input");
let history = document.querySelector(".recent-search");
let form = document.querySelector("form");
//function to fecth weather api call
async function getWeather(e) {
  try {
    let weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${api}`
    );

    let response = await weather.json();
    return response;
  } catch (e) {
    console.log("Error occured in fetching API");
  }
}

//Button event to perform fetch by city name
let content = document.querySelector(".fourth-row");
let countryDiv = document.querySelector(".third-row");
let button = document.querySelector(".search-btn");
button.addEventListener("click", async (e) => {
  e.preventDefault();
  content.innerHTML = "";
  countryDiv.innerHTML = "";
  let weather = await getWeather();

  //Recent Searches
  let log = document.createElement("p");
  log.innerText = `. ${search.value}`;
  log.setAttribute("class", "search-history");
  form.appendChild(log);
  search.value = "";
  //Appending weather details
  let weatherDiv = document.createElement("div");
  let degree = document.createElement("p");
  degree.innerText = Math.floor(weather.main.temp - 273.15) + "°C";
  degree.setAttribute("class", "degree");

  //Adding icon
  let weather_icon = document.createElement("img");
  weather_icon.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  weather_icon.style.fontSize = "1rem";

  //Humidity
  let humidity1 = document.createElement("p");
  humidity1.innerText = `Humidity:${weather.main.humidity}%`;
  humidity1.setAttribute("class", "humidity");

  //

  let wind = document.createElement("p");
  wind.innerText = `wind:${weather.wind.speed} km/hr`;
  wind.setAttribute("class", "humidity");
  weatherDiv.append(weather_icon, degree);
  content.append(weatherDiv, humidity1, wind);

  //Display country and city

  let country = document.createElement("h1");
  country.innerText = `Country code: ${weather.sys.country}`;
  country.setAttribute("class", "country");

  let city = document.createElement("h3");
  city.innerText = `Result of In City:${weather.name}`;
  city.setAttribute("class", "city");
  countryDiv.append(country, city);
});
