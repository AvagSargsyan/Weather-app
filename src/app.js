import footer from "./footer";
import weatherForm from "./weatherForm";
import weatherInfo from "./weatherInfo";

function App() {
  const container = document.createElement('div');
  container.classList.add('app');

  function render(data) {
    container.innerHTML = '';
    container.appendChild(weatherForm(function (data) {
      render(data);
    }));
    container.appendChild(weatherInfo(data));
    container.appendChild(footer());
  }
  render();

  return container;
}

export default App;
