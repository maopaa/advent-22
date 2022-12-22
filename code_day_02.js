/**
 * ⭐ Puntos conseguidos: 121
 * 🕑 2427 ops/s
 * 🎯 Complejidad cognitiva: 1
 */

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

countHours(year, holidays) // 2 días -> 4 horas extra en el año

// > Solucion
function countHours(year, holidays) {
    return holidays.map(holiday => {
        let dayOfWeek = new Date(holiday + '/' + year).getDay();
        return [1, 2, 3, 4, 5].includes(dayOfWeek);
    }).reduce((count, extra) => count + extra) * 2;
}