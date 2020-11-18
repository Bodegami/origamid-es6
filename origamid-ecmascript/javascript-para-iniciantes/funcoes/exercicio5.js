//Crie uma função para verificar se um valor é truthy

function verificaTipo(tipo){
  if (tipo) {
    return console.log('O valor é verdadeiro');
  } else {
    return console.log('O valor é falso')
  }
}
verificaTipo(1)

//crie uma função matemática que retorne o perímetro de um quadrado
//lembrando: perímmetro é a soma dos quatro lados do quadrado
function somaQuadrado(lado) {
  lado = lado * 4;
  return console.log(`O perímetro do quadrado é ${lado}`)
}
somaQuadrado(4)

//Crie uma função qie retorne o seu nome completo
//ela deve possuir os paramêtros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nomeCompleto = `${nome} ${sobrenome} `;
  return nomeCompleto;
}
console.log(nomeCompleto('Renato','Ferreira'))

//Crie uma função que verifica se um número é par
function verificarPares(numero){
  if (numero % 2 == 0) {
    return 'Esse número é par!';
  } else {
    return 'Esse número é ímpar!'
  }
}
console.log(verificarPares(11))

//Crie uma função que retorne o tipo de dado do argumento passado pela (typeof)
function verificaDado(dado){
  tipoDeDado = typeof dado;
  return tipoDeDado;
}
console.log(verificaDado('Olá'))

//addEventListener é função nativa do JavaScript
//o primeiro parâmetro é o evento que ocorre e o segundo é o callback
//utilize essa função para mostrar no console o seu nome completo
//quand o evento 'scroll' ocorrer.
addEventListener('mousewheel', ()=> {
  console.log('Renato Ferreira')
})


//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda falta ${totalPaises - paisesVisitados} países para visitar`
}
console.log(precisoVisitar(10))
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países.`
}
console.log(jaVisitei(10))