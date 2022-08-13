function solve(firstNumber, secoundNumber) {
    let string = ""
    let sum = 0;
    for (let i = firstNumber; i <= secoundNumber; i++) {
        sum += i;
        string += `${i} `

    }
    console.log(string);
    console.log(`Sum: ${sum}`);
}

solve(0, 26)
