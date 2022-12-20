
fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
// Resultado --> Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))

function fixLetter( letter ) {
    return letter
        .replace('??', '?')
        .replace('santa claus', 'Santa Claus')
        .replace('', '')
        .replace(',', ', ');
}