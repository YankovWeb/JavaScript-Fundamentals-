function solve(input) {
  let workArr = input;
  let workArrLength = input.length;
  let flag = false;
  let count = 0;
  let indexToShow = 2;
  for (let i = 0; i < workArrLength; i++) {
    for (let j = 0; j <= i; j++) {
      let leftElement = workArr[i];
      let rigthElement = workArr[i + 2];
      count += leftElement + rigthElement;

      if (count === workArr[i + 3]) {
        indexToShow += i;
        flag = true;
      }
    }
  }
  if (flag && workArrLength > 1) {
    console.log(indexToShow);
  } else {
    console.log("no");
  }
}
solve([1, 2, 3, 3]);
