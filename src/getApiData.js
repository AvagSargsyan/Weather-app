async function getWeatherData(cityName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=54dcd8e9e87894c430bb25c704729ad3`,
      {
        mode: 'cors',
      });
    if (response.status === 404) {
      throw new Error('404');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === '404') {
      throw new Error('404');
    } else {
      throw new Error(error.message);
    }
  }
}

async function extractData(cityName) {
  try {
    const data = await getWeatherData(cityName);
    console.log(data)
    return {
      temp: data.main.temp,
      feel: data.main.feels_like,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
    }
  } catch (error) {
    throw error;
  }
}

export default extractData;
