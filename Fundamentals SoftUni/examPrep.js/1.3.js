function solve(arr) {
    let sequenceOfElements = arr.shift().split(" ");
    let countMoves = 0;
    for (let i = 0; i < arr.length; i++) {
        let comand = arr[i];
        if (comand === "end") {
            break;
        } else {
            countMoves++;

            comand = comand.split(" ").map(Number);
            let firstIndex = comand[0];
            let secoundIndex = comand[1];
            if (firstIndex === secoundIndex || firstIndex < 0 || secoundIndex < 0) {
                let extra = "-" + countMoves + "a";
                let indexForInsurtion = sequenceOfElements.length / 2;
                sequenceOfElements.splice(indexForInsurtion, 0, extra, extra);
                console.log("Invalid input! Adding additional elements to the board");
                continue;
            }
            let firstTry = sequenceOfElements[firstIndex];
            let secoundTry = sequenceOfElements[secoundIndex];
            if (firstTry === secoundTry) {
                console.log(
                    `Congrats! You have found matching elements - ${sequenceOfElements[firstIndex]}!`
                );
                sequenceOfElements = sequenceOfElements.filter(
                    (el) => el !== sequenceOfElements[firstIndex]
                );
                if (sequenceOfElements.length === 0) {
                    console.log(`You have won in ${countMoves} turns!`);
                    break;
                }
            }
            if (firstTry !== secoundTry) {
                console.log("Try again!");
            }
        }
    }
    if (sequenceOfElements.length > 0) {
        console.log(`Sorry you lose :(
${sequenceOfElements.join(" ")}`);
    }
}
solve(["end"]);
