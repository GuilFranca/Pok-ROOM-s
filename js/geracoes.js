const geracoes = document.querySelector('.container__geracoes');

function atualizarGeracoes() {
  const larguraGeracoes = window.innerWidth;

  let imagensGen = {
    gen1: '',
    gen2: '',
    gen3: '',
    gen4e5: '',
    gen6e7: '',
  }

  if (larguraGeracoes >= 768) {
    imagensGen.gen1 = `${pontoEndereco}/images/images__geracoes/gen 1 descktop.png" alt="geração 1`;
    imagensGen.gen2 = `${pontoEndereco}/images/images__geracoes/gen 2 descktop.png" alt="geração 2`;
    imagensGen.gen3 = `${pontoEndereco}/images/images__geracoes/gen 3 descktop.png" alt="geração 3`;
    imagensGen.gen4e5 = `${pontoEndereco}/images/images__geracoes/gen 4 e 5 descktop.png" alt="geração 4 e 5`;
    imagensGen.gen6e7 = `${pontoEndereco}/images/images__geracoes/gen 6 e 7 descktop.png" alt="geração 6 e 7`;
  } else {
    imagensGen.gen1 = `${pontoEndereco}/images/images__geracoes/gen 1.png" alt="geração 1`;
    imagensGen.gen2 = `${pontoEndereco}/images/images__geracoes/gen 2.png" alt="geração 2`;
    imagensGen.gen3 = `${pontoEndereco}/images/images__geracoes/gen 3.png" alt="geração 3`;
    imagensGen.gen4e5 = `${pontoEndereco}/images/images__geracoes/gen 4 e 5.png" alt="geração 4 e 5`;
    imagensGen.gen6e7 = `${pontoEndereco}/images/images__geracoes/gen 6 e 7.png" alt="geração 6 e 7`;
  }

  geracoes.innerHTML = `
    <a href="${pontoEndereco}/pages/pages__geracoes/gen1.html"><img src="${imagensGen.gen1}"></a>

    <a href="${pontoEndereco}/pages/pages__geracoes/gen2.html"><img src="${imagensGen.gen2}" alt="geração 2"></a>

    <a href="${pontoEndereco}/pages/pages__geracoes/gen3.html"><img src="${imagensGen.gen3}" alt="geração 3"></a>

    <a href="${pontoEndereco}/pages/pages__geracoes/gen4e5.html"><img src="${imagensGen.gen4e5}" alt="geração 4 e 5"></a>

    <a href="${pontoEndereco}/pages/pages__geracoes/gen6e7.html"><img src="${imagensGen.gen6e7}" alt="geração 6 e 7"></a>
  `;

}

// window.addEventListener('resize', atualizarGeracoes);

// Chama uma vez ao carregar a página
atualizarGeracoes();

// Opcional: atualiza ao redimensionar
window.addEventListener('resize', () => {
  atualizarGeracoes();
});