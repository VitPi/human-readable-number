module.exports = function toReadable(number) {

    let arrNumb = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    let objectNumber = {
        1: 'one',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    let arr = [...String(number)];

    if (number <= 20) {
        return arrNumb[number];
    } else if (number / 10 === +arr[0]) {
        return objectNumber[arr[0]]
    } else if (number / 100 === +arr[0]) {
        return `${arrNumb[arr[0]]} hundred`
    } else if (arr.length === 2) {
        return `${objectNumber[arr[0]]} ${arrNumb[arr[1]]}`
    } else if (arr.length === 3 && +arr[1] === 1) {
        return `${arrNumb[arr[0]]} hundred ${arrNumb[+(arr[1] + arr[2])]}`
    } else if (arr.length === 3 && +arr[1] < 1) {
        return `${arrNumb[arr[0]]} hundred ${arrNumb[arr[2]]}`
    } else if (arr.length === 3 && +arr[2] !== 0) {
        return `${arrNumb[arr[0]]} hundred ${objectNumber[arr[1]]} ${arrNumb[arr[2]]}`
    } else {
        return `${arrNumb[arr[0]]} hundred ${objectNumber[arr[1]]}`
    }
}





