import { pageLogin } from './home/main.js';

const divMain = document.querySelector('#root');


const init = () => {
    const currentHash = window.location.hash;
    divMain.innerHTML = '';
    switch (currentHash) {
        case '#login':
            divMain.appendChild(pageLogin());
            break;
        default:
            divMain.appendChild(pageLogin());
    }
}



window.addEventListener('load', init);

window.addEventListener('hashchange', () => {
    init()
});