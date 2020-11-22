/*
Array e Loops

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']

for (var i = 0; i < videGames.length; i++) {
  console.log(videoGames[i]);
}

O for loop é o mais comum
-----------------------------------------------
Break

O loop irá parar caso encontre a palavra break

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']

for (var i =0; i < videGames.length; i++) {
  console.log(videoGames[i]);
  if(videGames[i] === 'PS4') {
    break;
  }
}
--------------------------------------------------

forEach

forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
videogames.forEach(function(item) {
  console.log(item);
});
//O argumento item será atribuido dinamicamente

Podemos passar os seguintes parâmetros item, index e array
-----------------------------------------------------------------

*/

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva', 'Goiaba']
frutas.forEach(function(item, index, array) {
  console.log(item, index, array)
})