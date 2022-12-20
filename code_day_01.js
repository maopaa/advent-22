/**
 * ⭐ Puntos conseguidos: 110
 * 🕑 2517 ops/s
 * 🎯 Complejidad cognitiva: 1
 */

const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);

// > Resultado
function wrapping(gifts) {
  const result = [];
  gifts.forEach( (gift, index) => {
    let paper = '**';
    for ( let i=0; i<gift.length; i++ ) {
      paper += '*';
    }
    result.push( paper + '\n*' + gift + '*\n' + paper );
  });

  return result;
}