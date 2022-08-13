function solve(data) {
  let obj = new Map();
  data.forEach((element) => {
    let buffer = JSON.parse(element);
    let [key] = Object.entries(buffer);
    obj.set(key[0], key[1]);
  });
  let sortResult = Array.from(obj).sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });
  sortResult.forEach((element) => {
    let [term, definition] = element;
    console.log(`Term: ${term} => Definition: ${definition}`);
  });
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"aus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
