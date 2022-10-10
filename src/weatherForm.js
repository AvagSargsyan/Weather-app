import extractData from "./getApiData";

function weatherForm(onChange) {
  const container = document.createElement('form');
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'cityName';
  input.placeholder = 'Enter city name';
  const button = document.createElement('button');
  button.innerText = 'Search';


  form.addEventListener('submit', e => {
    e.preventDefault();
    extractData(input.value).then(data => {
      console.log(data);
      onChange(data);
    }).catch(error => {
      if (error.message === '404') {
        onChange('not valid');
      } else {
        onChange('other error');
      }
    });
  });

  form.appendChild(input);
  form.appendChild(button);
  container.appendChild(form);
  return container;
}

export default weatherForm;
