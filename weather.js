const apiKey = '407da1bebb6271ba8a1d61f0a14930ce'; 

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            alert('Location not found. Please try again.');
            return;
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Something went wrong. Please try again later.');
    }
}

function displayWeather(data) {
    const tempElement = document.querySelector('.temp');
    const locationElement = document.querySelector('.location');
    const weatherIcon = document.querySelector('.weather-icon');

    const temperature = data.main.temp;
    const locationName = data.name;
    const weatherCondition = data.weather[0].icon;

    tempElement.innerText = `${temperature}°C`;
    locationElement.innerText = locationName;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherCondition}@2x.png`;
}
