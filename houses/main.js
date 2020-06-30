export const pageHouses = () => {
  window.location = '#houses';
  const divHouses = document.createElement('section');
  divHouses.classList.add('houses-template');
  divHouses.innerHTML = `
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
      <div id='about-houses'></div>
      `;

  const housesAbout = divHouses.querySelector('#about-houses');
  housesAbout.innerHTML = `
    
    `;

  return divHouses;
};
