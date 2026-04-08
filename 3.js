async function getWeather() {

    const location = document.getElementById("locationInput").value.trim();
    const result = document.getElementById("weatherResult");

    if (location === "") {
        result.innerHTML = "Please enter a country or city!";
        return;
    }

    const apiKey = "94ac81f072ff782fea9c256125e75cb2";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&limit=1&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Location not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        result.innerHTML = "❌ Unable to fetch weather. Check country/city name or API key.";
        console.log(error);
    }
}