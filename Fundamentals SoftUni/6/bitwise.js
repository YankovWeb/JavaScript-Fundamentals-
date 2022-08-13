function hero(input) {
  let heroes = [];
  for (let heroInfo of input) {
    let [name, level, items] = heroInfo.split(" / ");

    let currentHero = {
      name: name,
      level: +level,
      items: items,
    };
    heroes.push(currentHero);
  }
  let sortrdByLevel = heroes.sort((a, b) => {
    return a.level - b.level;
  });

  for (const hero of sortrdByLevel) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level=> ${hero.level}`);
    console.log(`items=> ${hero.items}`);
  }
}
hero([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
