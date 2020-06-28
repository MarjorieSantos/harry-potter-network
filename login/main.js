
export const pageLogin = () => {
  window.location = '#login';
  const divLogin = document.createElement('div');
  divLogin.classList.add('login');
  divLogin.innerHTML = `
    <div class='container-login container'>
        <img src="../assets/pngfuel.com.png" alt="logo do site">
        <div class="inputs-div">
          <div>
            <label for="firstname">Nome:</label>
            <input type="text" id="firstname" placeholder="Nome">
          </div>
          <div>
            <label for="lastname">Sobrenome:</label>
            <input type="text" id="lastname" placeholder="Sobrenome">
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="exemple@exemple.com">
          </div>
          <button class='btn btn-confirm' id="confirm-login">CONTINUAR</button>
    </div>
    </div>
`;

  // const firstName = divLogin.querySelector('#firstname');
  // const lastName = divLogin.querySelector('#lastname');
  // const btnConfirm = divLogin.querySelector('#confirm-login');

  // const goHomePage = () => {
  //   printNameInPage(firstName.value, lastName.value);

  //   window.location = '#home';
  // };

  // btnConfirm.addEventListener('click', goHomePage);

  return divLogin;
};
