export const modalLufaLufa = () => {
  window.location.href = '#home';
  const lufalufa = document.createElement('section');
  lufalufa.classList.add('modal', 'border-lufa-lufa');
  lufalufa.innerHTML = `
    <div>
      <button class='close-lufa-lufa' id="close-modal"><i class="far fa-times-circle icon"></i></button>
    </div>
    <div>
      <h2>Lufa-Lufa</h2>
      <h3>A Lufa-Lufa corresponde ao texugo.</h3>
    </div>
    <div>
      <span>A Lufa-Lufa corresponde ao elemento Terra , e é por essa razão que as cores da Casa foram escolhidos: trigo representado amarelo, enquanto o preto foi o emblemático do solo. </span>
    </div>
    <div>
      <span>Traços:</span>
      <ul>
        <li>❱ Paciência</li>
        <li>❱ Disposição</li>
        <li>❱ Lealdade</li>
        <li>❱ Gentileza</li>
      </ul>
    </div>
    <div>
    <span>A Diretora de Casa da  Lufa-Lufa é Pomona Sprout e Frei Gorducho é o fantasma da Casa.</span>
    </div>
    <div>
      <span>A casa é conhecida como mais inclusiva entre as quatro; valorizando o trabalho árduo, a dedicação, a paciência, a lealdade e o jogo limpo, em vez de uma aptidão específica em seus membros. </span>
    </div>
      `;

  const close = lufalufa.querySelector('#close-modal');
  const modal = lufalufa.querySelector('.modal');

  const closeModal = () => {
    modal.style.display = 'none';
  };

  close.addEventListener('click', closeModal);

  return lufalufa;
};
