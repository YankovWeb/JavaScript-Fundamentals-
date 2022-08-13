function solve(data) {
  let string = data.shift();
  let result = 0;
  let arr = [];

  let pattern =
    /(#|\|)(?<name>[\w\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
  let match = pattern.exec(string);
  while (match !== null) {
    result += Number(match.groups.calories);
    let name = match.groups.name;
    let data = match.groups.date;
    let calories = match.groups.calories;

    let stringToPush = `Item: ${name}, Best before: ${data}, Nutrition: ${calories}`;
    arr.push(stringToPush);
    match = pattern.exec(string);
  }
  result = result / 2000;
  console.log(`You have food to last you for: ${Math.floor(result)} days!`);
  arr.forEach((element) => {
    console.log(element);
  });
}
solve([
  [
    "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
  ],
]);
