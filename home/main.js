import { modalGrifinoria } from './grifinoria.js';
import { modalSonserina } from './sonserina.js';
import { modalCorvinal } from './corvinal.js';
import { modalLunfaLunfa } from './lunfa-lunfa.js';


export const pageHome = () => {
  window.location = '#home';
  const divHome = document.createElement('div');
  divHome.classList.add('home');
  divHome.innerHTML = `
    <section class='slider '>
      <div class='slide slide1'>
       <div class="slide-item-img">
       <img src='../assets/harry-potter.jpg' alt='Harry Potter'>
       </div>
      </div>
      <div class='slide slide2'>
      <div class="slide-item-img">
        <img src='../assets/934.jpg' alt='Plataforma 9 3/4'>
        </div>
      </div>
      <div class='slide slide3'>
      <div class="slide-item-img">
        <img src='../assets/ampulheta.jpg' alt='Ampulheta'>
        </div>
      </div>
    </section>
      <header class="header" id='header'></header>
      <section class='principal-content' id='principal-content'></section>
      <section class="section-houses" id='houses-template'></section>
      <footer class='footer-bg' id='footer'></footer>
  `;

  const header = divHome.querySelector('#header');
  header.innerHTML = `
    <nav class="nav-menu">
      <ul>
        <li>Home</li>
        <li id='house'>Casas</li>
        <li>Sobre</li>
      </ul>
    </nav>
  `;

  const contentPrincipal = divHome.querySelector('#principal-content');
  contentPrincipal.innerHTML += `
        <div class='logo'>
          <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="presentation">
          <span>
            Bem-vindo ao Harry Potter Network, onde você encontrará várias curiosidades sobre o Harry Potter para mantê-lo ocupado, incluindo feitiços, sobre as casas para os leitores iniciantes, bem como para aqueles que já estão familiarizados com o mundo bruxo.
          </span>
          <button class='btn'>Ver mais</button>
        </div>
  `;

  const houses = divHome.querySelector('#houses-template');
  houses.innerHTML += `
    <div class='title'>
      <h1>Casas</h1>
    </div>
    <div class='houses'>
      <div class="home-house">
        <img class="img-houses" src="../assets/grifinoria.jpg" alt="Grifinória">
        <h2 class='title'>Grifinória</h2>
        <span>
          Fundada pelo famoso bruxo da época, o poderoso Godric Gryffindor, os membros da Griffinória são conhecidos por sua coragem e lealdade. 
        </span>
        <button class="btn" style='background: #c51f15' id='btn-grifinoria'><a href='#grifinoria'>Ver mais</a></button>
      </div>
      <div class="home-house">
        <img class="img-houses" src="../assets/sonserina.jpg" alt="Sonserina">
        <h2 class='title'>Sonserina</h2>
        <span>
          A casa Sonserina é conhecida por possuir os membros mais ambiciosos, calculistas e orgulhosos e foi fundada pelo famoso bruxo Salazar Slytherin.
        </span>
        <button class="btn" style='background: #1d8a1f' id='btn-sonserina'><a href='#sonserina'>Ver mais</a></button>
      </div>
      <div class="home-house">
        <img class="img-houses" src="../assets/lunfa-lunfa.jpg" alt="Lunfa-Lunfa">
        <h2 class='title'>Lunfa-Lunfa</h2>
        <span>
          Fundada pelo bruxa Helga Hufflepuff, a casa Lufa-Lufa tem como membros os mais gentis, pacientes e tolerantes alunos. 
        </span>
     <a class="btn" style='background: #dfb30e' id='btn-lunfalunfa'href='#lunfa-lunfa'>Ver mais</a>
      </div>
      <div class="home-house">
        <img class="img-houses" src="../assets/corvinal.jpg" alt="Corvinal">
        <h2 class='title'>Corvinal</h2>
        <span>
          Corvinal é a casa daqueles que tem uma grande capacidade intelectual, ou até mesmo os que são focados nos estudos e foi fundada pelo bruxa Rowena Revenclaw.
        </span>
        <button class="btn" style='background: #0297bf' id='btn-corvinal'><a href='#convinal'>Ver mais</a></button>
      </div>
    </div>
    <div id='modal'></di>
  `;

  const footer = divHome.querySelector('#footer');
  footer.innerHTML += `
    <div class='footer'>
      <div class='explore column'>
        <span>Explore: </span>
        <a href="https://www.jkrowling.com/" target="blank"> ❯ K.K Rowling</a>
        <a href="https://www.harrypotterstore.com.br/" target="blank"> ❯ Harry Potter Store</a>
        <a href="https://www.wizardingworld.com/" target="blank"> ❯ Wizarding World</a>
      </div>
      <div class='redes column'>
        <span>Contato:</span>
        <div class='btn-div'>
          <button><i class="fa fa-instagram icon"></i></button>
          <button><i class="fa fa-linkedin icon"></i> </button>
          <button><i class="fa fa-facebook icon"></i> </button>
        </div>
      </div>
    </div>
  `;

  let slideIndex = 0;

  function showSlides() {
    const slides = divHome.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex += 1;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  showSlides();

  const btnCorvinal = houses.querySelector('#btn-corvinal');
  const btnGrifinoria = houses.querySelector('#btn-grifinoria');
  const btnSonserina = houses.querySelector('#btn-sonserina');
  const btnLunfaLunfa = houses.querySelector('#btn-lunfalunfa');
  const openModal = houses.querySelector('#modal');

  const init = (event) => {
    event.preventDefault();
    openModal.innerHTML = '';
    switch (event.currentTarget.hash) {
      case '#grifinoria':
        openModal.appendChild(modalGrifinoria());
        break;
      case '#corvinal':
        openModal.appendChild(modalCorvinal());
        break;
      case '#lunfa-lunfa':
        openModal.appendChild(modalLunfaLunfa());
        break;
      case '#sonserina':
        openModal.appendChild(modalSonserina());
        break;
      default:
        openModal.appendChild(modalSonserina());
    }
  };

  // window.addEventListener('hashchange', () => {
  //   init();
  // });

  btnLunfaLunfa.addEventListener('click', init);
  btnGrifinoria.addEventListener('click', init);
  btnSonserina.addEventListener('click', init);
  btnCorvinal.addEventListener('click', init);

  return divHome;
};
