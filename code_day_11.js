/**
 * >> Puntuación: 220
 * >> 2592 ops/s
 * >> Complejidad cognitiva: 2
 */

getCompleted('01:10:10', '03:30:30');

function getCompleted( part, total ) {

    part = part.split(':');
    part = (+part[0]) * 60 * 60 + (+part[1]) * 60 + (+part[2]);

    total = total.split(':');
    total = (+total[0]) * 60 * 60 + (+total[1]) * 60 + (+total[2]);

    const calculateCommonDivisor = (a, b) => {
        while (b) {
            let t = b;
            b = a % b;
            a = t
        }
        return a
    }

    let commonDiv = calculateCommonDivisor( part, total );
    console.log(`${part/commonDiv}/${total/commonDiv}`);
    return `${part/commonDiv}/${total/commonDiv}`;
}