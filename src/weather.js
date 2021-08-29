const getWeather = (city, units = "imperial") => (
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=178646b9ecfd2ef70525bec2572a8851`,{mode: "cors"})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    })
    .catch(function (error) {
        return error;
    })
);

export default getWeather;