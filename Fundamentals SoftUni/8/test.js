function solve(input) {
  let n = Number(input.shift());
  let pattern = /@{1}#{1,}(?<products>[A-Z][A-Za-z0-9]{4,}[A-Z]{1})@{1}#{1,}/;

  let string = input.shift();
  for (let i = 0; i < n; i++) {
    let found = string.match(pattern);

    if (!found) {
      console.log("Invalid barcode");
    } else {
      let product = found.groups.products;
      let patern = /(?<numbers>[0-9])/g;
      let newFound = product.match(patern);
      if (!newFound) {
        console.log("Product group: 00");
      } else {
        let number = newFound.join("");
        console.log(`Product group: ${number}`);
      }
    }

    string = input.shift();
  }
}
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
