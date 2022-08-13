function pig(input) {
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let pigWeight = Number(input[3]) * 1000;
  let IsEnougth = true;
  for (let i = 1; i <= 30; i++) {
    food -= 300;
    if (i % 2 === 0) {
      let hayUse = food * 0.05;
      hay -= hayUse;
    }
    if (i % 3 === 0) {
      let coverUse = pigWeight * 0.3333;
      cover -= coverUse;
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      console.log("Merry must go to the pet store!");
      IsEnougth = false;
      break;
    }
  }
  if (IsEnougth) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  }
}
pig(["10", "5", "5.2", "1"]);
pig(["1", "1.5", "3", "1.5"]);
pig(["9", "5", "5.2", "1"]);
