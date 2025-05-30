console.log("footer.js carregado");

// já declarado anteriormente
// let pontoEndereco;

let footer = document.querySelector('footer');
footer.innerHTML = `
    <a href="${pontoEndereco}/index.html"><img src="../images/PokéROOM's_Logo.png" alt="Logo Pokémon ROOM's"></a>

    <ul class="footer__navegation">
        <li><a href="${pontoEndereco}/emuladores.html">Emuladores</a></li>
        <li><a href="${pontoEndereco}/ROOM's.html">ROOM's</a></li>
        <li><a href="${pontoEndereco}/sobre.html">Sobre</a></li>
    </ul>
`;