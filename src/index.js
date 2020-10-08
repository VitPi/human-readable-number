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
    let arr = [...String(number)],
        num = +arr.join('');


    if (number <= 20) {
        return arrNumb[number];
    } else if (number / 10 === +arr[0]) { // проверка на четность перед 100
        return objectNumber[arr[0]]
    } else if (number / 100 === +arr[0]) {   // проверка на четность после 100
        return `${arrNumb[arr[0]]} hundred`
    } else if (arr.length === 2) {
        return `${objectNumber[arr[0]]} ${arrNumb[arr[1]]}`  // вывод двух значных чисел до 100
    } else if (arr.length === 3) {
        return `${arrNumb[arr[0]]} hundred ${objectNumber[arr[1]]} ${arrNumb[arr[2]]}`
    } else if (arr[2] === 0) {
        return `${arrNumb[arr[0]]} hundred ${arrNumb[arr[2]]}`
    }


    // } else if (number / 10 === +arr[0]) {
    //     return `${objectNumber[arr[0]]}`
    // } else if (number < 100) {
    //     return `${objectNumber[arr[0]]} ${arrNumb[arr[1]]}`
    // } else if (number / 100 === +arr[0]) {
    //     return `${arrNumb[arr[0]]} hundred`
    // } else if (number > num && number < num) {
    //     return `${objectNumber[arr[0]]} hundred ${arrNumb[arr[2]]}`
    // } else
    //     // if (number > num && number === num)
    //     {
    //     return `${arrNumb[arr[0]]} hundred ${arrNumb[arr[1] + arr[2]]}`
    // }

    // else {
    //     return `${arrNumb[arr[0]]} hundred ${objectNumber[arr[1]]} ${arrNumb[arr[2]]}`
    // }


    // console.log(`${arrNumb[arr[0]]} hundred ${arrNumb[+(arr[1] + arr[2])]}`)
    //
    // console.log(arr)

    // console.log(`${objectNumber[arr[0]]} ${arrNumb[arr[1]]}`)

}

// module.exports(456)


//======================================================================
// if (!number || number === 0) return 'zero';
//
// let result = '', dig = 0;
//
// const digits = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
//
// if ( number >= 100 ) {
//     dig = (number/100)|0;
//     result = `${ digits[dig] } hundred`;
//     number -= dig * 100;
// }
//
// if ( number > 19  ) {
//
//     const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
//
//     dig = (number/10)|0;
//     number -= dig * 10;
//     result = `${result} ${tens[dig]} ${digits[number]}`;
// }
// else result = `${result} ${digits[number]}`;
//
// return result.trim();
