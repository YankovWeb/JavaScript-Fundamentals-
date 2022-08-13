function tank(input) {
  let neededExp = input.shift();
  let expectedBattles = input.shift();
  let count = 0;
  let countBattles = 0;
  for (let i = 0; i < expectedBattles; i++) {
    countBattles++;
    let nextExp = input[i];
    if (countBattles % 3 === 0) {
      nextExp += nextExp * 0.15;
    }
    if (countBattles % 5 === 0) {
      nextExp -= nextExp * 0.1;
    }
    if (countBattles % 15 === 0) {
      nextExp += nextExp * 0.05;
    }
    count += nextExp;

    if (count >= neededExp) {
      console.log(
        `Player successfully collected his needed experience for ${countBattles} battles.`
      );
      break;
    }
  }
  if (count < neededExp) {
    console.log(
      `Player was not able to collect the needed experience, ${(
        neededExp - count
      ).toFixed(2)} more needed.`
    );
  }
}
tank([400, 5, 50, 100, 200, 100, 20]);
