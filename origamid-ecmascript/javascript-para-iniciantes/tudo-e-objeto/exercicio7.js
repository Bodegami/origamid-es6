// nomeie 3 propriedades ou métodos de strings
var nome = 'Renato';

console.log(nome.toLowerCase());
console.log(nome.length);
console.log(nome.replace('nato', 'inaldo'));

//nomeie 5 propriedade ou métodos de elementos DOM
var btn = document.querySelector('.btn');

btn.innerHTML = 'CLIQUE AQUI';
btn.addEventListener('click', function() {
  btn.style.backgroundColor = '#FF0';
  btn.style.color = '#0FF';
  btn.outerHTML;
})

//busque na web um objeto (método) capaz de interagir com o clipboard
//clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//biblioteca clipboard.js resolve o problema de cima