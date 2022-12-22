/**
 * ⭐ Puntos conseguidos: 200
 * 🕑 1875 ops/s
 * 🎯 Complejidad cognitiva: 1
 */

fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);

// Resultado --> Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

function fixLetter( letter ) {
    return letter
        .replace(/(^\s+)|(\s+$)/g, '')
        .replace(/([.,!])(.*)/g, '$1 $2')
        .replace(/([.,?!\s])(?=\1)/g, '')
        .replace(/\s+([.,?!])/g, '$1')
        .replace(/santa claus/gi, 'Santa Claus')
        .replace(/\b([.?!] \w)|(^\w)/g, match => match.toUpperCase())
        .replace(/^.*\w$/, match => `${match}.`);
}