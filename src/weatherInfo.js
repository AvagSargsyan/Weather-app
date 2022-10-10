function farenheitToCelsius(tempInF) {
  return +(((tempInF - 32) * 0.5556).toFixed(2));
}

function weatherInfo(data) {
  const container = document.createElement('div');

  if (data === undefined) {
    container.innerHTML = '';
  } else if (data === 'not valid') {
    container.innerHTML = 'Please enter a valid city name.';
    container.classList.add('error');
  } else if (data === 'other error') {
    container.innerHTML = 'Oops! Something went wrong. Please try again :(';
    container.classList.add('error');
  } else {
    container.classList.remove('error');
    container.innerHTML = `
    <h1 class="city-name">${data.city}</h1>
    <div class="description">${data.description}</div>
    <div class="tempF">${data.temp}F</div>
    <div class="tempC">${farenheitToCelsius(data.temp)}C</div>
    <div class="feelF">${data.feel}C</div>
    <div class="feelC">${farenheitToCelsius(data.feel)}F</div>
    <div class="wind">${data.wind}km/hr</div>
    <button>C</button>
  `
  }

  return container;
}

export default weatherInfo;
