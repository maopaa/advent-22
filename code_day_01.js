/**
 * ⭐ Puntos conseguidos: 121
 * 🕑 2539 ops/s
 * 🎯 Complejidad cognitiva: 1
 */

const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);

// > Resultado
function wrapping(gifts) {
  return gifts.map( gift => {
    let pattern = "*".repeat(gift.length + 2);
    return `${pattern}\n*${gift}*\n${pattern}`;
  });
}