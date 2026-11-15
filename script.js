// URL base oficial da Rick and Morty API
const API_URL = 'https://rickandmortyapi.com/api/character';

// Seleção dos elementos do DOM nesta API
const cardsContainer = document.getElementById('cards-container');
const statusMessage = document.getElementById('status-message');
const searchInput = document.getElementById('search-input');
const statusFilter = document.getElementById('status-filter');
const searchBtn = document.getElementById('search-btn');

// 1. Função principal para consumir a API utilizando fetch() e .then()
function buscarPersonagens(nome = '', status = '') {
  // Limpa os cards anteriores antes de carregar os novos
  cardsContainer.innerHTML = '';
  statusMessage.style.display = 'block';
  statusMessage.textContent = 'Buscando personagens no multiverso...';

  // Monta a URL com opção de filtro
  const urlFinal = `${API_URL}/?name=${encodeURIComponent(nome)}&status=${encodeURIComponent(status)}`;

  fetch(urlFinal)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Nenhum personagem encontrado com esses filtros.');
      }
      return response.json(); // Converte a resposta para JSON
    })
    .then(function(data) {
      statusMessage.style.display = 'none';
      console.log('Dados recebidos da API em tempo real:', data);

      // Pega as informações do array "results" da API para criar um card por personagem
      data.results.forEach(function(personagem) {
        criarCardPersonagem(personagem);
      });
    })
    .catch(function(error) {
      statusMessage.style.display = 'block';
      statusMessage.textContent = error.message;
      console.error('Erro na requisição:', error);
    });
}

// 2. Função que constrói card com createElement e appendChild
function criarCardPersonagem(personagem) {
  // Cria o elemento principal do card (<article class="character-card">)
  const card = document.createElement('article');
  card.classList.add('character-card');

  // Cria a imagem do boneco que irá aparecer (<img>)
  const img = document.createElement('img');
  img.src = personagem.image;
  img.alt = `Foto de ${personagem.name}`;
  img.classList.add('character-image');

  // Cria o container de informações (<div class="card-info">)
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');

  // Cria o título com o nome do personagem (<h3>)
  const nome = document.createElement('h3');
  nome.classList.add('character-name');
  nome.textContent = personagem.name;

  // Cria o indicador de estado e Espécie (<div class="status-badge">)
  const statusDiv = document.createElement('div');
  statusDiv.classList.add('status-badge');

  const statusDot = document.createElement('span');
  statusDot.classList.add('status-dot');
  if (personagem.status === 'Alive') {
    statusDot.classList.add('status-alive');
  } else if (personagem.status === 'Dead') {
    statusDot.classList.add('status-dead');
  } else {
    statusDot.classList.add('status-unknown');
  }

  const statusText = document.createElement('span');
  statusText.textContent = `${personagem.status} - ${personagem.species}`;

  // Coloca a bolinha de cor e o texto dentro de status
  statusDiv.appendChild(statusDot);
  statusDiv.appendChild(statusText);

  // Cria o parágrafo da Origem (<p>)
  const origem = document.createElement('p');
  origem.classList.add('character-detail');
  origem.innerHTML = `<strong>Origem:</strong> ${personagem.origin.name}`;

  // Cria o parágrafo de Última Localização (<p>)
  const localizacao = document.createElement('p');
  localizacao.classList.add('character-detail');
  localizacao.innerHTML = `<strong>Localização:</strong> ${personagem.location.name}`;

  // Monta a árvore de elementos dos cartões usando appendChild pois é pedido no trabalho.
  infoDiv.appendChild(nome);
  infoDiv.appendChild(statusDiv);
  infoDiv.appendChild(origem);
  infoDiv.appendChild(localizacao);

  card.appendChild(img);
  card.appendChild(infoDiv);

  // Adiciona o cartão dentro da seção do HTML
  cardsContainer.appendChild(card);
}

// Eventos para filtrar os personagens pelo botão ou Enter
searchBtn.addEventListener('click', function() {
  buscarPersonagens(searchInput.value, statusFilter.value);
});

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    buscarPersonagens(searchInput.value, statusFilter.value);
  }
});

// Inicializa a página carregando os personagens ao abrir
buscarPersonagens();
