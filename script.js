const apiKey = "859301734a5462005248e5c0d0fbc7ab";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/icons8-clouds-50.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/icons8-clear-50.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/icons8-drizzle-50.png";
        }

    }

    searchBtn.addEventListener("click", ()=> {
        checkWeather(searchBox.value);
    })

    checkWeather();