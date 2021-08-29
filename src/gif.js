async function getWeatherGif(s) {
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2xjb3mBXPeVO0WkDF9kT7396EcdpUUMq&s=${s}`, {mode: 'cors'})
        const gifData = await res.json();
        return gifData;
    } catch (error) {
        return error;
    }
}

export default getWeatherGif;