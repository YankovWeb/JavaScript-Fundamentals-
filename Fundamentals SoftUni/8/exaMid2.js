function numbers(input) {
  let coletionOfNumbers = input.shift().split(" ");
  let index = 0;
  let flag = true;
  while (true) {
    if (input[index] === "Finish") {
      break;
    }
    if (input.length < 1) {
      flag = false;
      break;
    }
    let next = input[index].split(" ");
    let comand = next[0];
    let workNumber = next[1];
    index++;

    switch (comand) {
      case "Add":
        coletionOfNumbers.push(Number(workNumber));
        break;
      case "Remove":
        if (coletionOfNumbers.includes(workNumber)) {
          let indexOfElement = coletionOfNumbers.indexOf(workNumber);
          coletionOfNumbers.splice(indexOfElement, 1);
          break;
        } else {
          break;
        }
      case "Replace":
        if (coletionOfNumbers.includes(workNumber)) {
          let replacement = next[2];
          indexOfElement = coletionOfNumbers.indexOf(workNumber);
          coletionOfNumbers.splice(indexOfElement, 1, replacement);
          break;
        } else {
          break;
        }
      case "Collapse":
        workNumber = Number(workNumber);
        coletionOfNumbers = coletionOfNumbers.filter(
          (num) => num >= workNumber
        );
        break;
    }
  }

  console.log(coletionOfNumbers.map(Number).join(" "));
}
numbers([
  "5 9 70 -56 9 9",
  "Replace 58 10",
  "Remove 9",
  "Collapse 9",
  "Finish",
]);
