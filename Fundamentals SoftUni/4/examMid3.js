function card(input) {
  let cards = input.shift().split(", ");
  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let workA = input[i];
    workA = workA.split(", ");
    let comand = workA[0];
    switch (comand) {
      case "Add":
        if (cards.includes(workA[1])) return "Card is already in the deck";
        let cardForAdd = workA[1];
        cards.push(cardForAdd);
        console.log("Card successfully added");
        break;
      case "Remove":
        if (cards.includes(workA[1])) {
          let indexOfCardForRemove = cards.indexOf(workA[1]);
          cards.splice(indexOfCardForRemove, 1);
          console.log("Card successfully removed");
          break;
        } else {
          console.log("Card not found");
          break;
        }
      case "Remove At":
        let indexOfElement = Number(workA[1]);
        let isInRagne1 = indexOfElement < cards.length && indexOfElement >= 0;
        if (!isInRagne1) {
          console.log("Index out of range");
          break;
        } else {
          cards.splice(indexOfElement, 1);
          console.log("Card successfully removed");
          break;
        }
      case "Insert":
        let indexOfInsert = Number(workA[1]);
        let cardForInsert = workA[2];
        let isInRagne = indexOfInsert < cards.length && indexOfInsert >= 0;
        if (!isInRagne) {
          console.log("Index out of range");
          break;
        }
        if (cards.includes(cardForInsert) && isInRagne) {
          console.log("Card is already added");
          break;
        } else {
          //insert at first index
          cards.splice(indexOfInsert, 0, cardForInsert);
          console.log("Card successfully added");
          break;
        }
    }
  }
  console.log(cards.join(", "));
}

card([
  "Jack of Spare, Queen of Harts, Ace of Diamonds",
  "3",
  "Add, King",
  "Add, 10",
  "Remove, Ace of Diamonds",
]);
