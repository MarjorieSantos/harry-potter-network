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
    `;

  const aboutText = divAbout.querySelector('#about-text');
  aboutText.innerHTML = `
  
  `;

  return divAbout;
};
