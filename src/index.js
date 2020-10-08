const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.match(/.{10}/g);
    let res = ''
    for (subarr of arr) {
        let word = '';
        if (subarr === '**********') {
            res += ' ';
            continue;
        }
        let symbols = subarr.match(/.{2}/g);
        while (symbols[0] === '00') {
            symbols.shift()
        }
        symbols.join('').replace(/(10)|(11)/g, function (match, p1, p2) {
            if (p1) { word += '.'; }
            if (p2) { word += '-'; }
        });
        res += MORSE_TABLE[word]
    }
    return res;
}

module.exports = {
    decode
}