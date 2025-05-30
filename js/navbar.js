let pontoEndereco;

if (window.location.pathname.split('/').pop() === 'index.html') {
    pontoEndereco = '.';
} else {
    pontoEndereco = '..';
}

let navbarMobile = document.querySelector('.navbar');
navbarMobile.innerHTML = `
    <div class="container">
      <a href="${pontoEndereco}/index.html"><img class="img__logo" src="${pontoEndereco}/images/PokéROOM's_Logo.png" alt=""></a>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
        aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
`;

let collapseNavbarMobile = document.querySelector('#navbarHeader');
collapseNavbarMobile.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-sm-4 offset-md-1 py-4">
          <ul class="list-unstyled bootstrap__list">
            <li><a href="${pontoEndereco}/pages_navegation/emuladores.html" class="collapse__itemList">Emuladores</a></li>
            <li><a href="${pontoEndereco}/pages_navegation/ROOM's.html" class="collapse__itemList">ROOM's</a></li>
            <li><a href="${pontoEndereco}/pages_navegation/sobre.html" class="collapse__itemList">Sobre</a></li>
          </ul>
        </div>
      </div>
    </div>
`;

let navbarDescktop = document.querySelector('nav');
navbarDescktop.innerHTML = `
    <a href="${pontoEndereco}/index.html"><img class="img__logo" src="${pontoEndereco}/images/PokéROOM's_Logo.png" alt=""></a>

    <ul class="navbar__descktop__navegation_list">
      <li><a href="${pontoEndereco}/pages_navegation/emuladores.html" class="navbar__descktop__navegation__list__item">Emuladores</a>
      </li>
      <li><a href="${pontoEndereco}/pages_navegation/ROOM's.html" class="navbar__descktop__navegation__list__item">ROOM's</a></li>
      <li><a href="${pontoEndereco}/pages_navegation/sobre.html" class="navbar__descktop__navegation__list__item">Sobre</a></li>
    </ul>
`;