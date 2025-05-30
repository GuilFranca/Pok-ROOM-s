let carossel = document.querySelector('.carousel');

function atualizarCarrossel() {
  const largura = window.innerWidth;

  let imagens = {
    capa: '',
    emuladores: '',
    jogos: ''
  };

  if (largura >= 1025) {
    imagens.capa = `${pontoEndereco}/images__carossel/capa descktop.png`;
    imagens.emuladores = `${pontoEndereco}/images__carossel/emuladores carossel descktop.png`;
    imagens.jogos = `${pontoEndereco}/images__carossel/jogos carossel descktop.png`;
  } else if (largura >= 760) {
    imagens.capa = `${pontoEndereco}/images__carossel/capa 1 tablet.png`;
    imagens.emuladores = `${pontoEndereco}/images__carossel/emuladores carossel tablet.png`;
    imagens.jogos = `${pontoEndereco}/images__carossel/jogos carossel tablet.png`;
  } else {
    imagens.capa = `${pontoEndereco}/images__carossel/capa 1 V2.png`;
    imagens.emuladores = `${pontoEndereco}/images__carossel/emuladores carossel.png`;
    imagens.jogos = `${pontoEndereco}/images__carossel/jogos carossel mobile.png`;
  }

  carossel.innerHTML = `
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a href="${pontoEndereco}/index.html"><img src="${imagens.capa}" class="d-block w-100"
            alt="Mantendo a jornada viva!"></a>
      </div>
      <div class="carousel-item">
        <a href="${pontoEndereco}/pages_navegation/emuladores.html"><img src="${imagens.emuladores}" class="d-block w-100" alt="Emuladores"></a>
      </div>
      <div class="carousel-item">
        <a href="${pontoEndereco}/pages_navegation/ROOM's.html"><img src="${imagens.jogos}" class="d-block w-100" alt="Jogos Pokémon"></a>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  `;
}

// Chama uma vez ao carregar a página
atualizarCarrossel();

// Opcional: atualiza ao redimensionar
window.addEventListener('resize', () => {
  atualizarCarrossel();
});
