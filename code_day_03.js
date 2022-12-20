/**
 * ⭐ Puntos conseguidos: 174
 * 3232 ops/s
 * Complejidad cognitiva: 1 
 */

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// > Solución
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor( (reindeers.join``.length * 2) / packOfGifts.join``.length )
}