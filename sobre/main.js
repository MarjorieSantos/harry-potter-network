export const pageAbout = () => {
  window.location = '#about';
  const divAbout = document.createElement('section');
  divAbout.classList.add('about');
  divAbout.innerHTML = `
    <header class="header" id='header'>
      <nav class="nav-menu">
        <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#houses'>Casas</a></li>
        <li><a href='#quiz'>Quiz</a></li>
        </ul>
      </nav>
    </header>
    <div id='about-text'></div>
    <footer class='footer-bg' id='footer'></footer>
    `;

  const footer = divAbout.querySelector('#footer');
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
          <a href='https://www.instagram.com/yrmoonn/'><i class="fa fa-instagram icon"></i></a>
          <a href='www.linkedin.com/in/marjorie-SCF'><i class="fa fa-linkedin icon"></i> </a>
          <a href='https://www.facebook.com/marjSCF/'><i class="fa fa-facebook icon"></i> </a>
        </div>
      </div>
    </div>
      `;

  const aboutText = divAbout.querySelector('#about-text');
  aboutText.innerHTML += `


  `;

  return divAbout;
};
