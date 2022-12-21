/**
 * ⭐ Puntos conseguidos: 100
 * 🕑 2025 ops/s
 * 🎯 Complejidad cognitiva: 5
 */

printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
])

printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
])

// > Solución
function printTable(gifts) {

    const header = ['Gift', 'Quantity'];

    const maxName = Math.max(
        header[0].length,
        ...gifts.map(g => g.name.length)
    );

    const maxQuantity = Math.max(
        header[1].length,
        ...gifts.map(g => g.quantity.toString().length)
    );

    let spaceName = maxName - header[0].length;
    let spaceQuantity = maxQuantity - header[1].length;
    if (spaceQuantity < 0 ) spaceQuantity = 0;

    let size = 7 + header[0].length + spaceName +
        header[1].length + spaceQuantity;

    let print = '+'.repeat(size) + '\n' +
        `| ${header[0]}${' '.repeat(spaceName)}` +
        ` | ${header[1]}${' '.repeat(spaceQuantity)} |\n` +
        `| ${'-'.repeat(header[0].length + spaceName)}` +
        ` | ${'-'.repeat(header[1].length + spaceQuantity)} |\n`;

    gifts.forEach( gift => {
        let giftLength = maxName - gift.name.length;
        let quantityLength = maxQuantity - gift.quantity.toString().length;
        if (header[0].length > maxName)
            giftLength = header[0].length - gift.name.length;
        if (header[1].length > maxQuantity)
            quantityLength = header[1].length - gift.quantity.toString().length;
        print += `| ${gift.name}${' '.repeat(giftLength)}` +
            ` | ${gift.quantity}${' '.repeat(quantityLength)} |\n`;
    });

    print += '*'.repeat(size);
    return print;
}