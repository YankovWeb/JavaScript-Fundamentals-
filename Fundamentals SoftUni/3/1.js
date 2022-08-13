function addAndSubtract(arr) {
    let newArray = []
    let originalSum = 0
    let newSum = 0
    for (let i = 0; i < arr.length; i++) {
        let input = arr[i]
        originalSum += input
        if (input % 2 === 0) {
            let result = input + i
            newSum += result

            newArray.push(result)
        } else {
            let result = input - i
            newSum += result
            newArray.push(result)
        }
    }
    console.log(newArray)
    console.log(originalSum)
    console.log(newSum)

} addAndSubtract([5, 15, 23, 56, 35])
