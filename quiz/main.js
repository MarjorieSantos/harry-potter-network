export const pageQuiz = () => {
  window.location = '#quiz';
  const divQuiz = document.createElement('section');
  divQuiz.classList.add('quizBg');
  divQuiz.innerHTML = `
      <img class='cover' src="../assets/quiz-wallpaper.jpg" alt="capa quiz">
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
      <div id='questions'></div>
      <footer class='footer-bg' id='footer'></footer>
  `;

  const footer = divQuiz.querySelector('#footer');
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

  const questions = divQuiz.querySelector('#questions');
  questions.classList.add('quiz', 'quizBg');
  questions.innerHTML = `
    <div>
      <h1>O quanto você sabe sobre Hogwarts?</h1>
    </div>
    <div class='box-questions'>
    <span>1 ᠈ Qual das disciplinas abaixo não é ensinada em Hogwarts?</span>
      <div>
        <input type="radio" value="pocao" name="onlyOption" class="radio">
        <label for="pocao">Poções</label>
      </div>
      <div>
        <input type="radio" value="trevas" name="onlyOption" class="radio">
        <label for="trevas">Defesa contra as artes das trevas</label>
      </div>
      <div>
        <input type="radio" value="sistems" name="onlyOption" class="radio">
        <label for="sistems">Sistemas de Adivinhação</label>
      </div>
      <div>
        <input type="radio" value="transfigure" name="onlyOption" class="radio">
        <label for="transfigure">Transfiguração</label>
      </div>
    </div>
    <div class='box-questions'>
    <span>2 ᠈ Qual das casas abaixo não pertence a Hogwats?</span>
      <div>
        <input type="radio" value="grifinoria" name="select" class="radio">
        <label for="grifinoria">Grifinória</label>
      </div>
      <div>
        <input type="radio" value="lunfalunfa" name="select" class="radio">
        <label for="lunfalunfa">Lunfa-Lunfa</label>
      </div>
      <div>
        <input type="radio" value="sonserina" name="select" class="radio">
        <label for="sonserina">Sonserina</label>
      </div>
      <div>
        <input type="radio" value="corvinal" name="select" class="radio">
        <label for="corvinal">Corvinal</label>
      </div>
    </div>
    <div class='box-questions'>
      <span>3 ᠈ Quem são os fundadores de Hogwarts?</span>
      <div>
        <input type="radio" value="fund1" name="selectOneOption" class="radio">
        <label for="fund1">Godric Grifnória e Salazar Sonserina, Helga Lufa-Lufa e Rowena Ravenclaw.</label>
      </div>
      <div>
        <input type="radio" value="fund2" name="selectOneOption" class="radio">
        <label for="fund2">Godric Grifnória e Salazar Sonserina, e duas bruxas, Helga Lufa-Lufa e Rowena Corvinal.</label>
      </div>
      <div>
        <input type="radio" value="fund3" name="selectOneOption" class="radio">
        <label for="fund3">Godric Grifnória e Salazar Sonserina.</label>
      </div>
      <div>
        <input type="radio" value="fund4" name="selectOneOption" class="radio">
        <label for="fund4">Godric Grifnória e Salazar Sonserina e Helga Lufa-Lufa.</label>
      </div>
    </div>
    <div class='box-questions'>
    <span>4 ᠈ Qual das casas abaixo não pertence a Hogwats?</span>
    <div>
      <input type="radio" value="grifinoria" name="selectOne" class="radio">
      <label for="grifinoria">Grifinória</label>
    </div>
    <div>
      <input type="radio" value="lunfalunfa" name="selectOne" class="radio">
      <label for="lunfalunfa">Lunfa-Lunfa</label>
    </div>
    <div>
      <input type="radio" value="sonserina" name="selectOne" class="radio">
      <label for="sonserina">Sonserina</label>
    </div>
    <div>
      <input type="radio" value="corvinal" name="selectOne" class="radio">
      <label for="corvinal">Corvinal</label>
    </div>
    </div>
    <div class='box-questions'>
      <span>5 ᠈ O que é o torneio tribuxo?</span>
      <div>
        <input type="radio" value="torn1" name="selectOnly" class="radio">
        <label for="torn1">Um campeonato entre um representante de cada uma das três maiores escolas de magia da Europa:
          Academia de Magia Beauxbatons, Escola de Magia e Bruxaria de Hogwarts e Instituto Durmstrang.</label>
      </div>
      <div>
        <input type="radio" value="torn2" name="selectOnly" class="radio">
        <label for="torn2">Um campeonato entre vários alunos das as três maiores escolas de magia da Europa: Academia de
          Magia Beauxbatons, Escola de Magia e Bruxaria de Hogwarts e Instituto Durmstrang.</label>
      </div>
      <div>
        <input type="radio" value="torn3" name="selectOnly" class="radio">
        <label for="torn3">Um campeonato entre três bruxos da Escola de Magia e Bruxaria de Hogwarts.</label>
      </div>
      <div>
        <input type="radio" value="torn4" name="selectOnly" class="radio">
        <label for="torn14">Um campeonato entre três alunos de cada casa da Escola de Magia e Bruxaria de
          Hogwarts.</label>
      </div>
    </div>
    <div class='box-questions'>
      <span>6 ᠈ O que foi a Armada de Dumbleodore?</span>
      <div>
        <input type="radio" value="arm1" name="select1" class="radio">
        <label for="arm1">Foi uma organização secreta formada por Harry Potter.</label>
      </div>
      <div>
        <input type="radio" value="arm2" name="select1" class="radio">
        <label for="arm2"> foi uma organização secreta formada por Harry Potter, Hermione Granger e Rony Weasley em 1995
          para ensinar seus colegas de Hogwarts a se defender contra as artes das Trevas.</label>
      </div>
      <div>
        <input type="radio" value="arm3" name="select1" class="radio">
        <label for="arm3"> foi uma organização secreta formada por Harry Potter e Hermione Granger em 1995 para ensinar
          seus
          colegas de Hogwarts a se defender contra as artes das Trevas.</label>
      </div>
      <div>
        <input type="radio" value="arm4" name="select1" class="radio">
        <label for="arm4"> foi uma organização secreta formada por Harry Potter e Rony Weasley em 1995 para ensinar seus
          colegas de Hogwarts a praticar as artes das Trevas.</label>
      </div>
    </div>
    <button class='btn-enviar-questions'>Enviar</button>
    `;

  return divQuiz;
};
