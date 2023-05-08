function displayTemperature(response) {
  
  let cityElement = document.querySelector("#city"); 
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML =(response.data.main.humidity);
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = (response.data.name);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
let dateElement = document.querySelector("#currentDate");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let now = new Date();
let day = days[now.getDay()];
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");

let time = `${hours}:${minutes}`;
currentDate.innerHTML = `${day},${time}`;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src",`https://openweathermap.org/img/wn/04d@2x.png`);
}

function search(city) {
  let apiKey = "c85848972317ffffa0940e531019fa7a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
  
search("Nairobi");