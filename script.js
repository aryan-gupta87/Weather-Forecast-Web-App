
const apiKey = "50f63faff23e9f3674f9d4ffd43dbb71";
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    // fixed
    const resultDiv = document.getElementById("weatherResult");
    if(city === "") {
        resultDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
const data = await response.json();
        resultDiv.innerHTML = `
  <h2>${data.name}, ${data.sys.country}</h2>
  <p><i class="fa-solid fa-temperature-three-quarters"></i> Temperature: ${data.main.temp} °C</p>
  <p><i class="fa-solid fa-droplet"></i>Humidity: ${data.main.humidity}%</p>
  <p><i class="fa-solid fa-cloud-bolt"></i>Condition: ${data.weather[0].description}</p>
`;

        
 } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
    }
 ///<i class="fa-solid fa-temperature-three-quarters"></i>
 //<i class="fa-solid fa-droplet"></i>
//<i class="fa-solid fa-cloud-bolt"></i>
