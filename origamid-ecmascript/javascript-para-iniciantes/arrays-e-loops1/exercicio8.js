//Crie um array com os ano que o Brasil ganhou a copa
//1959, 1962, 1970, 1994, 2002

var ganharCopa = ['1959', '1962', '1970', '1994', '2002'];


//Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem
// `O Brasil ganhou a copa de ${array}`

ganharCopa.forEach(function(anoCopa) {
  console.log(`O Brasil ganhou a copa de ${anoCopa}`)
})

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'Pera') {
    break;
  }
}

//Coloque a última fruta do array acima em uma variável, sem remover a mesma do array


var ultimaFruta = frutas[frutas.length  -1];
console.log(ultimaFruta)
