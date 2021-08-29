import getWeatherGif from "./gif";
import getWeather from "./weather";

const getElement = (selector) => {
    const element = document.querySelector(selector);
    return element;
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    return element;
}

const createWeatherContainer = (city, temp, high, low) => {
    const main = getElement(".main");

    const weatherContainer = createElement("div", "weather-container");
    const weather = createElement("div", "weather");

    // const gifContainer = createElement("div", "weather-gif");
    // const img = createElement("img");
    // img.src = gif;
    // img.title = description;

    const cityElement = createElement("h1", "city");
    cityElement.textContent = city;

    const tempContainer = createElement("div", "temp-container");

    const currentTempContainer = createElement("div", "current-temp-container");
    const currentTempElement = createElement("p");
    currentTempElement.textContent = temp + "\xB0" + "F";

    const highLowContainer = createElement("div","high-low");

    const highTempElement = createElement("p");
    highTempElement.textContent = high + "\xB0" + "F";

    const lowTempElement = createElement("p");
    lowTempElement.textContent = low + "\xB0" + "F";

    highLowContainer.append(highTempElement, lowTempElement);
    currentTempContainer.append(currentTempElement);
    tempContainer.append(currentTempContainer, highLowContainer);
    weather.append(cityElement, tempContainer);
    weatherContainer.append(weather);
    main.append(weatherContainer);
}

const displayWeather = async (city) => {
    try {
        const weather = await getWeather(city);

        // Removed because gif rarily mataches the weather
        // const gif = await getWeatherGif(weather.weather[0].description); 

        createWeatherContainer(weather.name, Math.round(weather.main.temp), Math.round(weather.main.temp_max), Math.round(weather.main.temp_min));
    }
    catch (error) {
        alert("The city you entered doesn't exist");
    }
}

const clearWeather = () => {
    const main = getElement(".main");
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

const init = (() => {
    const form = getElement("form");
    const input = getElement("input");
    const clear = getElement(".clear");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        displayWeather(input.value);
        form.reset();
    });

    clear.addEventListener("click", clearWeather);
})();

