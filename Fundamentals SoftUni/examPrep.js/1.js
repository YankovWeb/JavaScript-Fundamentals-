function solve(input) {
    let index = 0;
    let first = Number(input[index++]);
    let secound = Number(input[index++]);
    let tird = Number(input[index++]);
    let studenCount = Number(input[index++]);
    let timeNeeded = 0;
    while (studenCount > 0) {
        timeNeeded++;
        if (timeNeeded % 4 === 0) {
            continue;
        }
        let studenFixed = first + secound + tird;
        studenCount -= studenFixed;
    }

    console.log(`Time needed: ${timeNeeded}h.`);
}
solve(["3", "2", "5", "40"]);
