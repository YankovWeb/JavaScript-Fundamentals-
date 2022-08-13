function solve(data) {
  let n = data.shift();
  let arr = [];
  for (let i = 0; i < n; i++) {
    let [name, composer, musicKey] = data.shift().split("|");
    let obj = {};
    obj[name] = [composer, musicKey];
    arr.push(obj);
  }
  let [comand, name, composer, musicKey] = data.shift().split("|");
  while (comand !== "Stop") {
    if (comand === "Add") {
      let flag = true;
      arr.forEach((a) => {
        if (a.hasOwnProperty(name)) {
          return (flag = false);
        }
      });
      if (flag) {
        let obj = {};
        obj[name] = [composer, musicKey];
        arr.push(obj);
        console.log(
          `${name} by ${composer} in ${musicKey} added to the collection!`
        );
      } else {
        console.log(`${name} is already in the collection!`);
      }
    }
    if (comand === "Remove") {
      let flag = true;
      arr.forEach((a) => {
        if (a.hasOwnProperty(name)) {
          flag = false;
          delete a[name];
        }
      });
      if (!flag) {
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
    if (comand === "ChangeKey") {
      let flag = false;
      arr.forEach((a) => {
        if (a.hasOwnProperty(name)) {
          a[name][1] = composer;
          flag = true;
        }
      });
      if (flag) {
        console.log(`Changed the key of ${name} to ${composer}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
    [comand, name, composer, musicKey] = data.shift().split("|");
  }
  arr.forEach((a) => {
    Object.entries(a).forEach(([key, [value, value2]]) => {
      console.log(`${key} -> Composer: ${value}, Key: ${value2}`);
    });
  });
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",

  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
