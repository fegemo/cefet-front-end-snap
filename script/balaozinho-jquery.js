// Sugestão: mantenha este arquivo e o balaozinho-vanilla.js abertos
//           lado a lado e vá "traduzindo" o código para usar jQuery
let $marcacoes = $('.marcacao');
let $balaozinho = $('#balaozinho');
let $marcacaoSelecionada = $marcacoes.first();

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

$marcacoes.on('click', e => {
  $marcacaoSelecionada.removeClass('selecionada');
  $marcacaoSelecionada = $(e.currentTarget);
  $marcacaoSelecionada.addClass('selecionada');
})

let $x = $('#marcacao-x');
let $y = $('#marcacao-y');
let $largura = $('#marcacao-largura');
let $altura = $('#marcacao-altura');

$('.controles input').on('input', () => {
  $marcacaoSelecionada.css('left', $x.val() + 'px');  
  $marcacaoSelecionada.css('top', $y.val() + 'px');  
  $marcacaoSelecionada.css('width', $largura.val() + 'px');  
  $marcacaoSelecionada.css('height', $altura.val() + 'px');  
});
