export const modalCorvinal = () => {
  window.location.href = '#home';
  const corvinal = document.createElement('section');
  corvinal.classList.add('modal', 'corvinal');
  corvinal.innerHTML = `
    <div>
      <button id="close-modal"><i class="far fa-times-circle icon"></i></button>
    </div>
    <div>
      <h1>Corvinal</h1>
      <h2>A Corvinal corresponde a Águia.</h2>
    </div>
    <div>
      <span>A Corvinal corresponde aproximadamente ao elemento Ar , e é por essa razão que as cores da Casa foram escolhidas; azul e bronze representam as penas do céu e da águia, respectivamente, ambos tendo muito a ver com o ar.</span>
    </div>
    <div>
      <span>Traços:</span>
      <ul>
        <li>❱ Criatividade</li>
        <li>❱ Sabedoria</li>
        <li>❱ Sagacidade</li>
        <li>❱ Nitidez</li>
      </ul>
    </div>
    <div>
      <span> O Diretor de Casa da Corvinal é Fílio Flitwick e a fantasma é a Dama Cinzenta , também conhecida como a filha de Rowena Ravenclaw, Helena Ravenclaw.</span>
    </div>
    <div>
      <span>s Corvinos são conhecidos por serem lógicos e racionais. Além disso, os estudantes desta casa tendem a ter habilidades em relação à Memória. Garrick Olivaras , por exemplo, possuía uma memória eidética e pôde se lembrar de todas as varinhas que vendeu, e Gilderoy Lockhart tinha um talento excepcional no Feitiço da Memória.</span>
    </div>
`;

  const close = corvinal.querySelector('#close-modal');
  const modal = corvinal.querySelector('.modal');

  const closeModal = () => {
    modal.style.display = 'none';
  };

  close.addEventListener('click', closeModal);

  return corvinal;
};
