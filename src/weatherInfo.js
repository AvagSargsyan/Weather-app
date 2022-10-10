import feelIcon from './assets/feels-like-icon.svg';
import humidityIcon from './assets/humidity-icon.svg';
import windIcon from './assets/wind-icon.svg';
import placeIcon from './assets/place-icon.svg'

function celsiusToFarenheit(tempInC) {
  return +(((tempInC * 1.8 + 32).toFixed(2)));
}

function weatherInfo(data, onChange) {
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
    container.classList.add('info-card');
    container.innerHTML = `
      <div class="main">
        <h2 class="city-name">
          <img src=${placeIcon} />
          ${data.city}
        </h2>
        <div class="description">${data.description}</div>
        <div class="tempC">${data.temp} &degC</div>
        <div class="tempF hide">${celsiusToFarenheit(data.temp)} &degF</div>
      </div>
      <div class="sec">
        <div class="feelC">
        <img src=${feelIcon} />
        Feels like: ${data.feel} &degC</div>
        <div class="feelF hide">
        <img src=${feelIcon} />
        Feels like: ${celsiusToFarenheit(data.feel)} &degF</div>
        <div class="humidity">
        <img src=${humidityIcon} />
        Humidity: ${data.humidity} %</div>
        <div class="wind">
        <img src=${windIcon} />
        Wind: ${data.wind} km/hr</div>
      </div>
    `
    const changeUnitsBtn = document.createElement('button');
    changeUnitsBtn.textContent = 'Change units';
    changeUnitsBtn.addEventListener('click', e => {
      onChange();
    });
    container.appendChild(changeUnitsBtn);
  }

  return container;
}

export default weatherInfo;
