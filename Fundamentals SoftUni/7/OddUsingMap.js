//extract elnof sentence
function solve(data) {
  let obj = new Map();

  let newArr = data.toLowerCase().split(" ");
  for (let word of newArr) {
    if (!obj.has(word)) {
      obj.set(word, 1);
    } else {
      let oldValue = obj.get(word);
      obj.set(word, oldValue + 1);
    }
  }
  let filterResult = Array.from(obj).filter(([key, value]) => {
    return value % 2 !== 0;
  });
  let buffer = "";
  for (let [key, value] of filterResult) {
    buffer += key + " ";
  }
  console.log(buffer);
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
// find odd number
