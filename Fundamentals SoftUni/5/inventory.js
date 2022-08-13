function invetory(input) {
  let newArr = [];
  input.forEach((element) => {
    let [name, levels, items] = element.split(" / ");
    levels = Number(levels);
    newArr.push({ name, levels, items });
  });
  let sorted = newArr.sort((a, b) => {
    return a.levels - b.levels;
  });
  for (const hero of newArr) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.levels}`);
    console.log(`items => ${hero.items}`);
  }
}
invetory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
