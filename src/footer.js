import githubIcon from './assets/github-icon.svg';

function footer() {
  const container = document.createElement('footer');

  container.innerHTML = `
  <footer class="footer">
  Copyright &copy; 2022 Avag Sargsyan
    <a href="https://github.com/AvagSargsyan" target="_blank">
      <img src="${githubIcon}" />
    </a>
  </footer>
  `

  return container;
}

export default footer;
