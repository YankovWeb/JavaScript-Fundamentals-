function dictionary(input) {
  let map = {};

  input.forEach((element) => {
    const obj = JSON.parse(element);

    for (let [key, value] of Object.entries(obj)) {
      map[key] = value;
    }
  });
  Object.entries(map)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => console.log(`term: ${el[0]} => Definition: ${el[1]}`));
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
