import extractData from "./getApiData";

function weatherForm(onChange) {
  const container = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'cityName';
  input.placeholder = 'Enter city name';
  const button = document.createElement('button');
  button.innerText = 'Search';


  container.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value) {
      extractData(input.value).then(data => {
        onChange(data);
      }).catch(error => {
        if (error.message === '404') {
          onChange('not valid');
        } else {
          onChange('other error');
        }
      });
    }
  });

  container.appendChild(input);
  container.appendChild(button);
  return container;
}

export default weatherForm;
