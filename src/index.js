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

module.exports = function decode(expr) {
  const chunks = expr.match(/.{10}/g);

  const result = chunks.map((chunk) => {
    if (chunk === '**********') {
      return ' ';
    }

    const cleaned = chunk.replace(/^0+/, '');

    let morse = '';
    for (let i = 0; i < cleaned.length; i += 2) {
      const pair = cleaned[i] + cleaned[i + 1];
      if (pair === '10') {
        morse += '.';
      } else if (pair === '11') {
        morse += '-';
      }
    }

    return MORSE_TABLE[morse];
  });

  return result.join('');
};
