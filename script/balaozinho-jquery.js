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

$marcacoes.on('mousemove', e => {
  $balaozinho.css('left', e.pageX + 'px');
  $balaozinho.css('top', e.pageY + 'px');
});

let $x = $('#marcacao-x');
let $y = $('#marcacao-y');
let $largura = $('#marcacao-largura');
let $altura = $('#marcacao-altura');

$('#definir-marcacao').click(() => {
  $marcacoes.first().css('left', $x.val() + 'px');  
  $marcacoes.first().css('top', $y.val() + 'px');  
  $marcacoes.first().css('width', $largura.val() + 'px');  
  $marcacoes.first().css('height', $altura.val() + 'px');  
});
