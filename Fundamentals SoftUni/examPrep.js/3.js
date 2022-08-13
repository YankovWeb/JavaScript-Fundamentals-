function numbers(input) {
  let sum = 0;
  let array = input.split(" ");
  let arrayL = array.length;
  for (let i = 0; i < arrayL; i++) {
    sum += Number(array[i]);
  }
  let average = sum / arrayL;
  const instBelowTreashHold = (currentValue) => currentValue < average;

  let found = array
    .filter((element) => element > average)
    .sort((a, b) => b - a)
    .slice(0, 5);
  let flag = found.every(instBelowTreashHold);

  if (flag) {
    console.log("No");
  } else {
    console.log(found.join(" "));
  }
}
numbers("1");
