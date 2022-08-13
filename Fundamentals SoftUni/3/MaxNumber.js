function maxNumber(arr) {
    let newArr = arr.filter((a, b) => b < a)

    console.log(newArr)
} maxNumber([1, 4, 3, 2])