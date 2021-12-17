// Sugestão: mantenha este arquivo e o balaozinho-vanilla.js abertos
//           lado a lado e vá "traduzindo" o código para usar jQuery
let $marcacoes = $('.marcacao');
let $balaozinho = $('#balaozinho');

$marcacoes.on('mouseover', e => {
  let titulo = $(e.currentTarget).data('titulo');
  let conteudo = $(e.currentTarget).data('conteudo');
  $balaozinho.html(`<h2>${titulo}</h2><p>${conteudo}</p>`);
});

$marcacoes.on('mouseout', e => {
  $balaozinho.html('');
});
