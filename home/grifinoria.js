export const modalGrifinoria = () => {
  window.location.href = '#grifinoria';
  const grifinoria = document.createElement('section');
  grifinoria.classList.add('modal', 'grifinoria');
  grifinoria.innerHTML = `
    <div>
      <button id="close-modal"><i class="far fa-times-circle icon"></i></button>
    </div>
    <div>
      <h1>Grifinória</h1>
      <h2>A Grifinória corresponde ao fogo.</h2>
    </div>
    <div>
      <span>Seu animal símbolo é o leão, e suas cores são o vermelho e o dourado. A professora Minerva McGonagall é a Diretora mais recente da Casa.</span>
    </div>
    <div>
      <span>Traços:</span>
      <ul>
        <li>❱ Coragem</li>
        <li>❱ Ousadia</li>
        <li>❱ Nobreza</li>
        <li>❱ Lealdade</li>
      </ul>
    </div>
    <div>
      <span>Sir Nicholas de Mimsy-Porpington, também conhecido como "Nick Quase-Sem-Cabeça", é o fantasma residente.</span>
    </div>
    <div>
      <span>As características próprias dos estudantes selecionados para esta Casa são companheirismo e coragem. Atores, cantores e atletas muitas vezes são classificados nesta casa.Harry Potter, e seus amigos Rony Weasley e Hermione Granger são grifinórios.</span>
    </div>
    `;

  const close = grifinoria.querySelector('#close-modal');
  const modal = grifinoria.querySelector('.modal');

  const closeModal = () => {
    modal.style.display = 'none';
  };

  close.addEventListener('click', closeModal);

  return grifinoria;
};
