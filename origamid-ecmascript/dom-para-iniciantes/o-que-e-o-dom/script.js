/*
Document Object Model (DOM)

è uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
//possui diferentes métodos e propriedades

window.innerHeight; //retorna a altura do browser

Ao inspecionar elemento com o Chrome, voc~e está vendo a representação oficial do DOM.
----------------------------------------------------------------------------

Window e Document

São os métodos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Isso é um alerta');
alert('Isso é um alerta'); //Funciona

document.querySelector('h1'); //Seleciona o primeiro h1
document.body; //Retorna o body

window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
-------------------------------------------------------------------------------




*/

window.alert('Isso mesmo');

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/origamid-ecmascript/dom-para-iniciantes/o-que-e-o-dom/index.html') {
  console.log('É igual')
} else {
  ('Não é igual')
}

const h1Selected = document.querySelector('h1');
h1Selected.innerHTML = `Agora esse é título`;

