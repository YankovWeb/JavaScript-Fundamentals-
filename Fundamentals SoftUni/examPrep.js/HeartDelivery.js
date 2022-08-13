function solve(input) {
  let neighborhood = input.shift().split("@").map(Number);
  let index = 0;
  let count = 0;
  let countFinal = 0;
  let lengthNeighborhood = neighborhood.length;
  while (true) {
    let comand = input[index];
    if (comand.includes(" ")) {
      comand = comand.split(" ");
    } else {
      break;
    }

    let lengthJump = Number(comand[1]);
    count += lengthJump;
    if (count >= lengthNeighborhood) {
      count = 0;
    }
    neighborhood[count] = neighborhood[count] - 2;
    if (neighborhood[count] === 0) {
      console.log(`Place ${count} has Valentine's day.`);
      countFinal++;
    }
    if (neighborhood[count] < 0) {
      console.log(`Place ${count} already had Valentine's day.`);
    }
    index++;
  }
  console.log(`Cupid's last position was ${count}.`);
  if (countFinal === lengthNeighborhood) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${lengthNeighborhood - countFinal} places.`);
  }
}
solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
