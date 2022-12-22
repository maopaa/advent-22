/**
 * ⭐ Puntos conseguidos: 200
 * 🕑 2264 ops/s
 * 🎯 Complejidad cognitiva: 3
*/

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

getMaxGifts(giftsCities, maxGifts, maxCities) // 20

// --> Solución
function getMaxGifts( giftsCities, maxGifts, maxCities ) {
    return Math.max(
        ...giftsCities
            .sort((x, y) => y - x)
            .reduce(
                (result, _, i) => (
                    i && giftsCities.unshift(giftsCities.pop()),
                        (i = giftsCities
                            .slice(0, maxCities)
                            .reduce((acc, curr) => (acc += curr), 0)),
                    i <= maxGifts && result.push(i),
                    i - giftsCities[maxCities - 1] <= maxGifts &&
                    result.push(i - giftsCities[maxCities - 1]),
                        result
                ),
                []
            ),
        0
    );
}