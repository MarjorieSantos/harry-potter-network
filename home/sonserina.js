export const modalSonserina = () => {
  window.location = '#home';
  const sonserina = document.createElement('section');
  sonserina.classList.add('modal', 'border-sonserina');
  sonserina.innerHTML = `
    <div>
      <button class='close-sonserina' id="close-modal"><i class="far fa-times-circle icon"></i></button>
    </div>
    <div>
      <h2>Sonserina</h2>
      <h3>A Sonserina corresponde a cobra.</h3>
    </div>
    <div>
      <span>A Sonserina corresponde aproximadamente ao elemento água, devido às serpentes serem comumente associadas ao mar e aos lagos na mitologia da Europa Ocidental, bem como às serpentes serem animais fisicamente fluidos e flexíveis.</span>
    </div>
    <div>
      <span>Traços:</span>
      <ul>
        <li>❱ Astúcia</li>
        <li>❱ Liderança</li>
        <li>❱ Ambição</li>
        <li>❱ Determinação</li>
      </ul>
    </div>
    <div>
      <span>Havia dois Diretores notáveis ​​na Casa: Horácio Slughorn e Severo Snape.</span>
      <span>O fantasma da casa é o Barão Sangrento.</span>
    </div>
    <div>
      <span>Essas características incluem astúcia, desenvoltura e ambição. Muitos estudantes da Sonserina tendem a se unir, muitas vezes adquirindo líderes, o que exemplifica ainda mais as ambiciosas qualidades da Sonserina. Exemplos disso incluem a gangue de Draco Malfoy e os Comensais da Morte.</span>
    </div>
      `;

  const close = sonserina.querySelector('#close-modal');
  const modal = sonserina.querySelector('.modal');

  close.addEventListener('click', () => {
    modal.remove();
  });

  return sonserina;
};
