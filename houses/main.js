export const pageHouses = () => {
  window.location = '#houses';
  const divHouses = document.createElement('section');
  // divHouses.classList.add('houses-template');
  divHouses.innerHTML = `
      <div>
        <img class='house-bg' src='../assets/houses.jpg' alt='foto das casas'>
      </div>
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
      <footer class='footer-bg' id='footer'></footer>
      `;

  const housesAbout = divHouses.querySelector('#about-houses');
  housesAbout.classList.add('houses-template');
  housesAbout.innerHTML = `
    <div class='apresentation'>
      <h1>Casas de Hogwarts</h1>
      <span> Hogwarts é dividida em quatro Casas: Grifinória, Sonserina, Corvinal e Lufa-Lufa. O aluno entra na casa que o chapéu seletor escolher, o mesmo leva em consideração caracteristicas emocionais e intelectuais do determinado bruxo, também poderá ser levado em consideração o desejo do próprio aluno.</span>
    </div>
    <div>
    <div class='space-divs' id='corvinal-text'></div>
    <div class='space-divs' id='grifinoria-text'></div>
    <div class='space-divs' id='sonserina-text'></div>
    <div class='space-divs' id='lufa-lufa-text'></div>
    `;

  const footer = divHouses.querySelector('#footer');
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
            <button><i class="fa fa-instagram icon"></i></button>
            <button><i class="fa fa-linkedin icon"></i> </button>
            <button><i class="fa fa-facebook icon"></i> </button>
          </div>
        </div>
      </div>
    `;


  const houseCorvinal = divHouses.querySelector('#corvinal-text');
  houseCorvinal.innerHTML = `
    <div class='header-houses'>
      <img class="img-houses" src="../assets/corvinal.jpg" alt="Corvinal">
      <h2 class='title box-shadow-corvinal'>Corvinal</h2>
      <div class='infos-principal'>
        <h3>Fundadora:</h3>
        <p>Rowena Ravenclaw</p>
        <h3>Diretor:</h3>
        <p>Fílio Flitwick</p>
        <h3>Alunos:</h3>
        <p>Terêncio Boot | Cho Chang | Miguel Corner | Marieta Edgecombe | Antônio Goldstein | Padma Patil | Luna Lovegood | Gilderoy Lockhart | Garrick Olivaras</p>
        <h3>Fantasma:</h3>
        <p>A Dama Cinzenta</p>
      </div>
    </div>
    <div>
      <p>Sempre descrita como "bonita, porém intimidadora", Rowena, fundadora de Corvinal, morreu após ficar repentinamente doente. A lenda diz que sua morte surgiu em decorrência do coração partido, após ver sua filha - que se tornaria a fantasma da Corvinal - fugir e morrer nas mãos do Barão Sangrento.</p>
      <p>Corvinais são conhecidos por sua competitividade e sabedoria. Assim sendo, a casa formou alguns dos bruxos mais inteligentes do mundo, ou quando não, bruxos espertos e astuciosos o suficiente para conseguirem o que querem através de esquemas - como é o caso de Quirrell e Lockhart.</p>
      <p>A Sala Comunal e os dormitórios da Corvinal são, assim como os da Grifinória, localizados em uma das torres do castelo de Hogwarts. Ela é espaçosa e circular, e possui janelas arqueadas graciosas. As paredes são recobertas com seda nas cores azul e bronze.</p>
      <p>O principal objeto de valor de Rowena Ravenclaw é o Diadema. Reza a lenda que o utensílio, quando utilizado, aumentava a sabedoria de seu usuário, o que faz completo sentido, relembrando o fato dele ter pertencido à fundadora da Corvinal.</p>
    </div>
  `;

  const houseSonserina = divHouses.querySelector('#sonserina-text');
  houseSonserina.innerHTML = `
    <div class='header-houses'>
      <img class="img-houses" src="../assets/sonserina.jpg" alt="Sonserina">
      <h2 class='title box-shadow-sonserina'>Sonserina</h2>
      <div class='infos-principal'>
          <h3>Fundador:</h3>
          <p>Salazar Sonserina</p>
          <h3>Diretor:</h3>
          <p>Horácio Slughorn, Salazar Sonserina e Severo Snape</p>
          <h3>Alunos:</h3>
          <p>Tom Riddle | Horácio Slughorn | Belatriz Lestrange | Severo Snape | Draco Malfoy | Régulo Black | Gregório Goyle | Alvo Severo Potter | Lúcio Malfoy</p>
          <h3>Fantasma:</h3>
          <p>Barão Sangrento</p>
      </div>
    </div>
    <div>
      <p>Os preconceitos do fundador criou grande controvérsia em Hogwarts e foi a raiz de uma disputa entre os ex-amigos, Salazar Sonserina e Gódrico Grifinória. Sonserina mais tarde decidiu deixar a escola quando uma discussão começou entre ambos, eles duelaram e começaram uma guerra civil entre as duas casas.</p>
      <p>Os alunos da Sonserina são daqueles que fazem de tudo para alcançar os seus objetivos e gostam de saber que o seu destino está unicamente em suas mãos e de mais ninguém.</p>
      <p>O Chapéu Seletor afirma que a pureza do sangue foi um fator na seleção dos sonserinos. Não é o fator principal, mas sugere que o chapéu seletor leva em consideração a linhagem do aluno, bem como as características. Sonserinos nascidos-trouxas existem, mas são muito raros, como observado ofensivamente por Scabior líder dos Sequestradores.</p>
      <p>Sonserina possui paredes de pedra, camas de quatro colunas com cortinas de seda verde, colchas bordadas com fios prateados, tapeçarias medievais ilustrando aventuras dos famosos sonserinos por todas as paredes e lustres de prata pendurados no teto.</p>
    </div>
  `;

  const houseGrifinoria = divHouses.querySelector('#grifinoria-text');
  houseGrifinoria.innerHTML = `
    <div class='header-houses'>
      <img class="img-houses" src="../assets/grifinoria.jpg" alt="Sonserina">
      <h2 class='title box-shadow-grifinoria'>Grifinória</h2>
      <div class='infos-principal'>
          <h3>Fundador:</h3>
          <p>Godric Gryffindor</p>
          <h3>Diretora:</h3>
          <p>Minerva McGonagall</p>
          <h3>Alunos:</h3>
          <p>Alvo Dumbledore | Sirius Black | Remo Lupin | Pedro Pettigrew | Cátia Bell | Harry Potter | Hermione Granger | Família Weasley | Neville Longbottom</p>
          <h3>Fantasma:</h3>
          <p>Nicholas de Mimsy-Porpington</p>
      </div>
    </div>
    <div>
      <p>O Chapéu Seletor de Hogwarts era do próprio fundados Godric Gryffindor, que o encantou para facilitar o processo de seleção para as quatro casas. Ele possuía um grande talento para duelos e, como a maior parte dos Grifinórios, para a arte da transfiguração.</p>
      <p>A localização do Sala Comunal e dos dormitórios da Grifinória é localizada em uma das torres do castelo. A entrada é no sétimo andar e guardada pelo quadro da Mulher Gorda, que só permite a entrada de pessoas que saibam a senha da Casa - frequentemente trocada por motivos de segurança.</p>
      <p>O principal objeto consagrado dos Grifinórios é a espada de Godric Gryffindor. Forjada por duendes, a espada absorve tudo que a fortalece, o que foi comprovado por Harry na Câmara Secreta, quando a espada é impregnada de veneno de basilisco.</p>
      <p>Os Grifinórios, com exceção de Neville Longbottom, sempre possuem talento latente para a Transfiguração. Além disso, é uma casa que grande parte dos fãs não aprecia tanto, talvez por sua super-exposição na série.</p>
    </div>
  `;

  const houseLufaLufa = divHouses.querySelector('#lufa-lufa-text');
  houseLufaLufa.innerHTML = `
    <div class='header-houses'>
      <img class="img-houses" src="../assets/lunfa-lunfa.jpg" alt="Lufa-Lufa">
      <h2 class='title box-shadow-lufa-lufa'>Lufa-Lufa</h2>
      <div class='infos-principal'>
        <h3>Fundadora:</h3>
        <p>Helga Hufflepuff</p>
        <h3>Diretores:</h3>
        <p> Pomona Sprout e Frei Gorducho</p>
        <h3>Alunos:</h3>
        <p>Frei Gorducho | Pomona Sprout | Cedrico Diggory | Newt Scamander | Ana Abbott | Ted Lupin | Ninfadora Tonks | Susana Bones | Justino Finch-Fletchley</p>
        <h3>Fantasma:</h3>
        <p>Frei Gorducho</p>
      </div>
    </div>
    <div>
      <p>A Lufa-Lufa é considerada a mais inclusiva entre as quatro casas, avaliando várias características, em vez de uma característica específica em seus alunos.</p>
      <p>Um lufano parece ter uma menor rivalidade com outras casas, exceto no Quadribol, embora o Torneio Tribruxo tenha colocado temporariamente muita tensão no relacionamento entre a Grifinória, devido a circunstâncias incomuns da seleção de Harry Potter e Cedrico Diggory, como campeões. Isso foi concertado em 1998, onde a maioria dos Lufanos se levantaram para defender Harry de Pansy Parkinson e mais tarde lutando pela escola na Batalha de Hogwarts.</p>
      <p>Os dormitórios e a sala comunal da Lufa-Lufa nunca foram vistos por pessoas de fora e é a única casa com dispositivos repelentes no caso de intrusos. Eles são acessados ​​através de uma pilha de barris grandes, encontrados empilhados em um recesso de pedra sombria no corredor do lado direito, perto das cozinhas.</p>
      <p>A casa produziu muitos membros bem-sucedidos e influentes no Mundo Bruxo, como o famoso Magizoologista Newton Scamander. Um grande número de bruxos e bruxas excepcionalmente qualificados também tem suas origens nesta casa, incluindo a notável Aritmância, Bridget Wenlock, e a ex- Ministra da Magia, Artemisia Lufkin.</p>
    </div>
  `;


  return divHouses;
};
