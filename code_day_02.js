/**
 * Puntos conseguidos: 91
 * 2778 ops/s
 * Complejidad cognitiva: 1 (Más bajo es mejor)
 */

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

countHours(year, holidays) // 2 días -> 4 horas extra en el año

// > Solucion
function countHours(year, holidays) {
    let extra = 0
    holidays.map( day => {
      const date = new Date( `${day}/${year}` )
      date.getDay() > 0 && date.getDay() < 6 ? extra += 2 : extra += 0
    })
    return extra 
}