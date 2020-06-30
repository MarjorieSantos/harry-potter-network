import { pageLogin } from './login/main.js';
import { pageHome } from './home/main.js';
import { pageQuiz } from './quiz/main.js';
import { pageAbout } from './sobre/main.js';
import { pageHouses } from './houses/main.js';

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
    case '#quiz':
      divMain.appendChild(pageQuiz());
      break;
    case '#houses':
      divMain.appendChild(pageHouses());
      break;
    case '#about':
      divMain.appendChild(pageAbout());
      break;
    default:
      divMain.appendChild(pageHome());
  }
};


window.addEventListener('load', init);

window.addEventListener('hashchange', () => {
  init();
});
