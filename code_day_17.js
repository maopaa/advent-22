/**
 * ⭐ Puntos conseguidos: 260
 * 🕑 2153 ops/s
 * 🎯 Complejidad cognitiva: 1
 */

carryGifts(['toy', 'game', 'toy', 'bike'], 6) // Test 1
carryGifts(['game', 'bike', 'book', 'toy'], 4) // Test 2
carryGifts(['game', 'bike', 'book', 'toy'], 7) // Test 3

// --> Solución
function carryGifts(gifts, maxWeight) {
    const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g');
    return gifts.join(' ').match(regex) || [];
}