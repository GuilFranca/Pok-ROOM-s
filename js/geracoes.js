const geracoes = document.querySelector('.container__geracoes');
const larguraGeracoes = window.innerWidth;

if (larguraGeracoes >= 768) {

    geracoes.innerHTML = `
        <a href="#"><img src="./images__geracoes/gen 1 descktop.png" alt="geração 1"></a>

        <a href="#"><img src="./images__geracoes/gen 2 descktop.png" alt="geração 2"></a>

        <a href="#"><img src="./images__geracoes/gen 3 descktop.png" alt="geração 3"></a>

        <a href="#"><img src="./images__geracoes/gen 4 e 5 descktop.png" alt="geração 4 e 5"></a>

        <a href="#"><img src="./images__geracoes/gen 6 e 7 descktop.png" alt="geração 6 e 7"></a>
    `;

}
