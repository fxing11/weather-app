let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let minutes = `${now.getMinutes()}`.padStart(2, "0");
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${now.getHours()}:${minutes}`;

function showTemperature(response) {
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
}

function submit(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let city = document.querySelector("h1");
  city.innerHTML = input.value;
  let apiKey = "48477574ab33f03aeefc4b00219c6195";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", submit);
