function displayTemperature(response) {
  console.log(response.data);
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
}


let apiKey = "c85848972317ffffa0940e531019fa7a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);