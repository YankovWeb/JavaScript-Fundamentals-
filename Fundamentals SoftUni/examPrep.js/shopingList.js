function shoping(input) {
  let list = input.shift().split("!");
  let index = 0;

  while (true) {
    let workArray = input[index].split(" ");
    let comand = workArray[0];
    let item = workArray[1];
    let secondItem = workArray[2];

    if (comand === "Go" && item === "Shopping!") {
      break;
    }
    switch (comand) {
      case "Urgent":
        if (list.includes(item)) {
          break;
        }
        list.unshift(item);
        break;
      case "Unnecessary":
        if (list.includes(item)) {
          let indexOfItem = list.indexOf(item);
          list.splice(indexOfItem, 1);
          break;
        }
        break;

      case "Correct":
        if (list.includes(item)) {
          let indexOfItem = list.indexOf(item);
          list.splice(indexOfItem, 1, secondItem);
          break;
        }
        break;
      case "Rearrange":
        if (list.includes(item)) {
          let indexOfItem = list.indexOf(item);
          list.splice(indexOfItem, 1);
          list.push(item);
          break;
        }
        break;
    }
    index++;
  }

  console.log(list.join(", "));
}
shoping([
  "Milk!Pepper!Salt!Water!Banana!Grapes",
  "Rearrange Milk",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
