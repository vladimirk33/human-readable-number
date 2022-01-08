module.exports = function toReadable(number) {
    units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    specialNums = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let numArray = number.toString().split('').map((num) => { return parseInt(num) });
    let result;
    if (numArray.length == 1) {
        result = units[number];
    } else if (numArray.length == 2) {
        if (number >= 10 && number < 20) {
            result = specialNums[number - 10];
        } else {
            result = numArray[1] === 0 ? tens[numArray[0] - 1] : `${tens[numArray[0] - 1]} ${units[numArray[1]]}`;
        }
    } else if (numArray.length == 3) {
        result = `${units[numArray[0]]} hundred `;
        if (numArray[1] === 0 && numArray[2] != 0) {
            result += units[numArray[2]];
        } else if (parseInt(`${numArray[1]}${numArray[2]}`) >= 10 && parseInt(`${numArray[1]}${numArray[2]}`) < 20) {
            result += specialNums[parseInt(`${numArray[1]}${numArray[2]}`) - 10];
        } else if (parseInt(`${numArray[1]}${numArray[2]}`) >= 20 && parseInt(`${numArray[1]}${numArray[2]}`) < 100) {
            result += numArray[2] === 0 ? tens[numArray[1] - 1] : `${tens[numArray[1] - 1]} ${units[numArray[2]]}`;
        }
    } else {
        result = 'Cannot convert';
    }
    return result.trim();
}