module.exports = function toReadable (number) {
    const primeNumbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    const tensNumbers = [
        '',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    if (number < 20) {
        return primeNumbers[number];
    } else if (number < 100) {
        let mod = number % 10;
        let firstDigit = Math.floor(number / 10);
        
        return (mod == 0) 
            ? tensNumbers[firstDigit] 
            : `${tensNumbers[firstDigit]} ${primeNumbers[mod]}`;
    } else if (number < 1000) {
        let firstDigit = Math.floor(number / 100);

        return (number % 100 == 0)
            ? `${primeNumbers[firstDigit]} hundred`
            : `${primeNumbers[firstDigit]} hundred ${toReadable(number % 100)}`
    }
}
