import { pageLogin } from './login/main.js';
import { pageHome } from './home/main.js';

const divMain = document.querySelector('#root');

const init = () => {
  const currentHash = window.location.hash;
  divMain.innerHTML = '';
  switch (currentHash) {
    case '#login':
      divMain.appendChild(pageLogin());
      break;
    case '#home':
      divMain.appendChild(pageHome());
      break;
    default:
      divMain.appendChild(pageHome());
  }
};


window.addEventListener('load', init);

window.addEventListener('hashchange', () => {
  init();
});
