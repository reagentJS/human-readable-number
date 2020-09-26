module.exports = function toReadable(number) {

    const one = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const two = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    if (number === 0) return 'zero';
    if (number < 20) return one[number];
    let numberToArray = number.toString().split('');
    let res = '';

    function twoDigits(numberToArray) {
        let res = two[numberToArray[0].concat('0')];
        if (numberToArray[1] !== '0') res += ` ${one[numberToArray[1]]}`;
        return res;
    }

    if (numberToArray.length === 2) return twoDigits(numberToArray);

    if (numberToArray.length === 3) {
        res = `${one[numberToArray[0]]} hundred`;
        let sliced = numberToArray.slice(1).join('');
        if (sliced === '00') return res;
        if (sliced < 20) res += ` ${one[+sliced]}`;
        else res += ` ${twoDigits(sliced)}`;
    }

    return res;
}