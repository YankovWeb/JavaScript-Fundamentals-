function solve(data) {
  let numberOfplants = data.shift();
  let box = {};
  for (let i = 0; i < numberOfplants; i++) {
    let [plantName, rarity] = data.shift().split("<->");
    let rat;
    box[plantName] = { rarity: +rarity, rat: [] };
  }
  let pattern = /(?<comand>[A-z]+)/;
  let fullPattern =
    /(?<comand>[A-z]+):\s(?<name>[A-z]+)\s[-]\s(?<numbers>[0-9]+)/;
  let string = data.shift();
  let match = pattern.exec(string);
  let comand = match.groups.comand;

  while (comand !== "Exhibition") {
    switch (comand) {
      case "Rate":
        let newMatch = fullPattern.exec(string);
        let name = newMatch.groups.name;
        let ratting = newMatch.groups.numbers;
        //console.log(ratting);
        if (!box.hasOwnProperty(name)) {
          console.log("error");
        } else {
          box[name].rat.push(+ratting);
        }
        break;
      case "Update":
        let newMatch1 = fullPattern.exec(string);
        let name1 = newMatch1.groups.name;
        let newRarity = newMatch1.groups.numbers;
        box[name1].rarity = +newRarity;
        break;
      case "Reset":
        let [a, b] = string.split(": ");
        box[b].rat = 0;
        break;
    }
    string = data.shift();
    match = pattern.exec(string);
    comand = match.groups.comand;
  }
  console.log("Plants for the exhibition:");
  for (let [key, value] of Object.entries(box)) {
    let ratting = box[key].rat;
    let size = ratting.length;
    if (!size) {
      size = 0;
    } else {
      let acumul = ratting.reduce((acumulator, b) => {
        return acumulator + b;
      }, 0);

      box[key].rat = Number(acumul) / Number(size);
    }
    console.log(
      `- ${key}; Rarity: ${box[key].rarity}; Rating: ${(
        (box[key].rat * 100) /
        100
      ).toFixed(2)} `
    );
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
