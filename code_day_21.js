/**
 * ⭐ Puntos conseguidos: 200
 * 🕑 2025 ops/s
 * 🎯 Complejidad cognitiva: 1
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

// --> Solución
function printTable(gifts) {
    const getLength = (value) => `${value}`.length
    const { maxGiftLength, maxQuantityLength } = gifts.reduce(
        (sizes, { name, quantity }) => {
            return {
                maxGiftLength: Math.max(getLength(name), sizes.maxGiftLength),
                maxQuantityLength: Math.max(
                    getLength(quantity),
                    sizes.maxQuantityLength
                ),
            }
        },
        {
            maxGiftLength: 4,
            maxQuantityLength: 8,
        }
    )
    const [borderTop, borderBottom] = ["+", "*"].map((value) =>
        value.repeat(7 + maxGiftLength + maxQuantityLength)
    )
    const header = `| Gift${" ".repeat(maxGiftLength - 4)} | Quantity${" ".repeat(
        maxQuantityLength - 8
    )} |`
    const div = `| ${"-".repeat(maxGiftLength)} | ${"-".repeat(
        maxQuantityLength
    )} |`
    const content = gifts.map(({ name, quantity }) => {
        return `| ${name}${" ".repeat(
            maxGiftLength - getLength(name)
        )} | ${quantity}${" ".repeat(maxQuantityLength - getLength(quantity))} |`
    })

    return [borderTop, header, div, ...content, borderBottom].join("\n")
}