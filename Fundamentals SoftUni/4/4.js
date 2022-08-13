function main(input) {

    let evenCount = 0;
    let oddCount = 0;
    let workInput = input.toString()
    for (let char of workInput) {

        let currentNumberr = Number(char)
        if (currentNumberr % 2 === 0) {
            evenCount += currentNumberr;
        } else {
            oddCount += currentNumberr;
        }
    }
    console.log(`Odd sum = ${oddCount}, Even sum = ${evenCount}`)




} main(1000435)
