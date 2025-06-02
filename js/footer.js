// já declarado anteriormente
// let pontoEndereco;

let footer = document.querySelector('footer');
footer.innerHTML = `
    <a href="${pontoEndereco}/index.html"><img src="${pontoEndereco}/images/PokéROOM's_Logo.png" alt="Logo Pokémon ROOM's"></a>

    <ul class="footer__navegation">
      <li><a href="${pontoEndereco}/pages_navegation/emuladores.html">Emuladores</a></li>
      <li><a href="${pontoEndereco}/pages_navegation/ROOM's.html">ROOM's</a></li>
      <li><a href="${pontoEndereco}/pages_navegation/sobre.html">Sobre</a></li>
    </ul>
`;