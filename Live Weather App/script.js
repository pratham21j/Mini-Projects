document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "02caaeae44a64230ab3103802262507"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      console.log("Entered city is invalid");
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
function displayWeatherData(data) {
  console.log(data);

  cityNameDisplay.textContent = data.location.name;
  temperatureDisplay.textContent = `Temperature: ${data.current.temp_c} °C`;
  descriptionDisplay.textContent = `Weather: ${data.current.condition.text}`;

  weatherInfo.classList.remove("hidden");
  errorMessage.classList.add("hidden");
}

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
