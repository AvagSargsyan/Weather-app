import weatherForm from "./weatherForm";
import weatherInfo from "./weatherInfo";
import './styles/main.scss';

function App() {
  const container = document.createElement('div');
  container.classList.add('app');

  function render(data) {
    container.innerHTML = '';
    container.appendChild(weatherForm(function (data) {
      render(data);
    }));
    container.appendChild(weatherInfo(data, () => {
      const tempC = document.querySelector('.tempC');
      const tempF = document.querySelector('.tempF');
      const feelC = document.querySelector('.feelC');
      const feelF = document.querySelector('.feelF');
      tempC.classList.toggle('hide');
      tempF.classList.toggle('hide');
      feelC.classList.toggle('hide');
      feelF.classList.toggle('hide');
    }));
  }
  render();

  return container;
}

export default App;
