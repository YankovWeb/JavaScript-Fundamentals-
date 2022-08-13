
function MergeArrays(arrOne, arrTwo) {
    let newArray = [];



    for (let index = 0; index < arrOne.length; index++) {


        if (index % 2 === 0) {
            newArray[index] = Number(arrOne[index]) + Number(arrTwo[index]);


        } else {
            newArray[index] = arrOne[index] + arrTwo[index]
        }

    }

    return newArray.join(" - ")


}
MergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])