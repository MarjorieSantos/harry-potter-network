import { modalGrifinoria } from './grifinoria.js';
import { modalSonserina } from './sonserina.js';
import { modalCorvinal } from './corvinal.js';
import { modalLufaLufa } from './lunfa-lunfa.js';

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
          <a href='#sobre' class='btn principal-btn'>Ver Mais</a>
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
        <a class="btn grifinoria" id='btn-grifinoria' href='#grifinoria'>Ver mais</a>
      </div>
      <div class="home-house">
        <img class="img-houses" src="../assets/sonserina.jpg" alt="Sonserina">
        <h2 class='title'>Sonserina</h2>
        <span>
          A casa Sonserina é conhecida por possuir os membros mais ambiciosos, calculistas e orgulhosos e foi fundada pelo famoso bruxo Salazar Slytherin.
        </span>
        <a class="btn sonserina" id='btn-sonserina' href='#sonserina'>Ver mais</a>
      </div>
      <div class="home-house">
        <img class="img-houses" src="../assets/lunfa-lunfa.jpg" alt="Lufa-Lufa">
        <h2 class='title'>Lufa-Lufa</h2>
        <span>
          Fundada pelo bruxa Helga Hufflepuff, a casa Lufa-Lufa tem como membros os mais gentis, pacientes e tolerantes alunos. 
        </span>
        <a class="btn lufa-lufa" id='btn-lufalufa' href='#lufalufa'>Ver mais</a>
      </div>
      <div class="home-house">
        <img class="img-houses" src="../assets/corvinal.jpg" alt="Corvinal">
        <h2 class='title'>Corvinal</h2>
        <span>
          Corvinal é a casa daqueles que tem uma grande capacidade intelectual, ou até mesmo os que são focados nos estudos e foi fundada pelo bruxa Rowena Revenclaw.
        </span>
        <a class="btn corvinal" id='btn-corvinal' href='#corvinal'>Ver mais</a>
      </div>
    </div>
    <div id='modal'></div>
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
  const btnLunfaLunfa = houses.querySelector('#btn-lufalufa');
  const openModal = houses.querySelector('#modal');


  btnLunfaLunfa.addEventListener('click', (e) => {
    e.preventDefault();
    openModal.append(modalLufaLufa());
  });

  btnGrifinoria.addEventListener('click', (e) => {
    e.preventDefault();
    openModal.append(modalGrifinoria());
  });

  btnSonserina.addEventListener('click', (e) => {
    e.preventDefault();
    openModal.append(modalSonserina());
  });

  btnCorvinal.addEventListener('click', (e) => {
    e.preventDefault();
    openModal.append(modalCorvinal());
  });

  return divHome;
};
