function main(first, secound, third) {

    let sumFirstAndSecond = sum(first, secound)
    let finalResult = subtract(sumFirstAndSecond, third)
    console.log(finalResult)

    function sum(first, secound) {

        return first + secound;
    }
    function subtract(firstResult, thirdNumber) {
        return sumFirstAndSecond - thirdNumber;
    }
}
main(23, 6, 10)