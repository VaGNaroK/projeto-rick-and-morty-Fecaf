# Rick and Morty - Explorador de Personagens

Aplicação web interativa desenvolvida em **HTML5**, **CSS3** e **JavaScript puro (Vanilla JS)** com integração em tempo real a [The Rick and Morty API](https://rickandmortyapi.com/).


## Funcionalidades

* **Integração em Tempo Real:** Requisições assíncronas via `fetch()` e tratamento de Promises com `.then()`.

* **Geração Dinâmica de DOM:** Criação automatizada dos cards de personagens utilizando `document.createElement()` e `appendChild()`, mantendo o container HTML original limpo.

* **Busca e Filtros Dinâmicos:** Pesquisa de personagens por nome e filtragem por status vital (*Vivo*, *Morto* ou *Desconhecido*) diretamente nos parâmetros da API.

* **Layout Responsivo:** Interface temática estilizada com CSS Grid e variáveis CSS, sem uso de frameworks externos.

## Tecnologias Utilizadas

* **HTML5** (Estruturação semântica)

* **CSS3** (Estilização, Flexbox, CSS Grid e Responsividade)

* **JavaScript ES6+** (Fetch API, Manipulação de DOM e Eventos)

* **The Rick and Morty REST API** (`https://rickandmortyapi.com/api/character`)

## Estrutura do Projeto

```
projeto-rick-and-morty/
├── index.html   # Estrutura base e container dinâmico
├── style.css    # Estilização temática e layout responsivo
├── script.js    # Integração com a API e criação dinâmica dos cards
└── README.md    # Documentação do repositório
```

## Como Executar o Projeto

1. Clone este repositório ou faça o download dos arquivos:

   ```
   git clone https://github.com/VaGNaroK/projeto-rick-and-morty-Fecaf.git
   ```

2. Abra a pasta do projeto e dê um duplo clique no arquivo **`index.html`** para executá-lo em qualquer navegador moderno.

## Autor

Desenvolvido por **Gilberto Vagner** — UniFECAF.
