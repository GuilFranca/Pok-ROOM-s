const geracoes = document.querySelector('.container__geracoes');
const larguraGeracoes = window.innerWidth;

if (larguraGeracoes >= 768) {

    geracoes.innerHTML = `
      <a href="./pages__geracoes/gen1.html"><img src="./images__geracoes/gen 1 descktop.png" alt="geração 1"></a>

      <a href="./pages__geracoes/gen2.html"><img src="./images__geracoes/gen 2 descktop.png" alt="geração 2"></a>

      <a href="./pages__geracoes/gen3.html"><img src="./images__geracoes/gen 3 descktop.png" alt="geração 3"></a>

      <a href="./pages__geracoes/gen4e5.html"><img src="./images__geracoes/gen 4 e 5 descktop.png" alt="geração 4 e 5"></a>

      <a href="./pages__geracoes/gen6e7.html"><img src="./images__geracoes/gen 6 e 7 descktop.png" alt="geração 6 e 7"></a>
    `;

}
