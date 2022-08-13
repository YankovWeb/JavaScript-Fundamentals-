function sum(num) {

    let numberString = num.toString();
    let sumOfAllDigits = 0;

    for (let i = 0; i < numberString.length; i++) {

        let currentDigit = Number(numberString[i]);
        sumOfAllDigits += currentDigit;

    }

    console.log(sumOfAllDigits)

}
sum(245678);