// function squareDigits(num) {
//   let arr = (num + "").split("");
//   let map = arr.map((x) => {
//     x = Number(x);
//     return +x * +x;
//   });

//   let string = map.join("");
//   string = Number(string);
//   return string;

// }
function squareDigits(num) {
  return +(num + "")
    .split("")
    .map((a) => a * a)
    .join("");
}
console.log(typeof squareDigits(3212));
