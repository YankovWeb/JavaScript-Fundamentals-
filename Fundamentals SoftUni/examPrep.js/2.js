function solve(arr) {
    let index = 0;
    let array = arr[index].split(" ");
    index++;
    while (true) {
        let command = arr[index];
        if (command === "end") {
            break;
        } else {
            let newCommand = command.split(" ");
            let newestComand = newCommand[0];
            let firstIndex = Number(newCommand[1]);
            let secoundIndex = Number(newCommand[2]);
            switch (newestComand) {
                case "swap": swapArray(array, firstIndex, secoundIndex); break;
                case "multiply": multiply(array, firstIndex, secoundIndex); break;
                case "decrease": dicreas(array); break;
            }
        } index++;
    } console.log(array.join(", "));

    function swapArray(workArr, a, b) {
        let temp = workArr[a];
        workArr[a] = workArr[b];
        workArr[b] = temp;
    }
    function multiply(workArr, a, b) {
        workArr[a] = Number(workArr[a]) * Number(workArr[b]);
    }
    function dicreas(workArr) {
        array = array.map((x) => x - 1);
    }
} solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'

]);
