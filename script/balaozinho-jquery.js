// Sugestão: mantenha este arquivo e o balaozinho-vanilla.js abertos
//           lado a lado e vá "traduzindo" o código para usar jQuery
let $marcacoes = $('.marcacao');
let $balaozinho = $('#balaozinho');

$marcacoes.on('mouseover', e => {
  $balaozinho.html('qualquer coisa');
});

$marcacoes.on('mouseout', e => {
  $balaozinho.html('');
});
