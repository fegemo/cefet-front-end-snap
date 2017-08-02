let marcacoes = document.querySelectorAll('.marcacao');
let balaozinhoEl = document.querySelector('#balaozinho');

marcacoes.forEach(marcacaoEl => {

  marcacaoEl.addEventListener('mouseenter', e => {
    let marcacaoAtualEl = e.currentTarget;
    balaozinhoEl.innerHTML = '<h2>' + marcacaoAtualEl.dataset.titulo + '</h2>';
    balaozinhoEl.innerHTML += '<p>' + marcacaoAtualEl.dataset.conteudo + '</p>';
  });

  marcacaoEl.addEventListener('mouseleave', e => {
    balaozinhoEl.innerHTML = '';
  });

  marcacaoEl.addEventListener('mousemove', e => {
    balaozinhoEl.style.left = e.pageX + 'px';
    balaozinhoEl.style.top = e.pageY + 'px';
  });
});

let inputs = document.querySelectorAll('.controles input');
inputs.forEach(inputEl => {

  inputEl.addEventListener('keyup', e => {
    atualizaRegiao(marcacoes[0]);
  });

  inputEl.addEventListener('change', e => {
    atualizaRegiao(marcacoes[0]);
  });
});

function atualizaRegiao(marcacaoEl) {
  let x = document.querySelector('#marcacao-x').value;
  let y = document.querySelector('#marcacao-y').value;
  let largura = document.querySelector('#marcacao-largura').value;
  let altura = document.querySelector('#marcacao-altura').value;

  marcacaoEl.style.left = x + 'px';
  marcacaoEl.style.top = y + 'px';
  marcacaoEl.style.width = largura + 'px';
  marcacaoEl.style.height = altura + 'px';
}
