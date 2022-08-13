function paswordReset(input) {
  let pasword = input.shift();
  let isDone = false;
  let index = 0;

  while (!isDone) {
    let comandString = input[index];

    if (comandString.includes(" ")) {
      comandString = comandString.split(" ");

      if (comandString[0] === "Cut") {
        pasword = pasword.split("");
        let cutStart = Number(comandString[1]);
        let cutEnd = Number(comandString[2]);
        pasword.splice(cutStart, cutEnd);
        pasword = pasword.join("");
        console.log(pasword);
      }

      if (comandString[0] === "Substitute") {
        let char = comandString[1];

        if (pasword.includes(char)) {
          while (pasword.includes(char)) {
            pasword = pasword.replace(comandString[1], comandString[2]);
          }
          console.log(pasword);
        } else {
          console.log("Nothing to replace!");
        }
      }
    }
    if (comandString === "TakeOdd") {
      let newPasword = "";
      for (let i = 1; i < pasword.length; i += 2) {
        let newCase = pasword[i];
        newPasword += newCase;
      }
      pasword = newPasword;

      console.log(newPasword);
    }
    if (comandString === "Done") {
      isDone = true;
    }
    index++;
  }
  console.log(`Your password is: ${pasword}`);
}
paswordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
