document.addEventListener("DOMContentLoaded", () => {
  const cityName = document.getElementById("location");
  const searchButton = document.getElementById("search-btn");
  const weatherInfo = document.querySelector(".weather-status");

  searchButton.addEventListener("click", () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=b71be8aee5b3d4a93b5f98b6abef559c"
    )
      .then((response) => response.json())
      .then((data) => {
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const cityName = data.name;

        const weatherHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1 id="city">${cityName}</h1>
        <h3><span id="temp">${temperature}</span>&deg;C</h3>
        <h1 id="status" class="lead">${description}</h1>
        `;

        weatherInfo.innerHTML = weatherHTML;
      })
      .catch((err) => console.log(err));
  });
});
