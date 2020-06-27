export const pageLogin = () => {
  window.location = '#login';
  const divLogin = document.createElement('div');
  divLogin.classList.add('login');
  divLogin.innerHTML = `
    <div class='container-login container'>
        <img src="../assets/pngfuel.com.png" alt="logo do site">
        <div class="inputs-div">
            <label for="firstname">Nome:</label>
            <input type="text" id="firstname" placeholder="Nome">
            <label for="lastname">Sobrenome:</label>
            <input type="text" id="lastname" placeholder="Sobrenome">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="exemple@exemple.com">
            <button class='btn btn-confirm' id="confirm-login">CONTINUAR</button>
    </div>
    </div>
`;

  return divLogin;
};
