function store(arr, arr1) {
  let newObj = {};

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    newObj[product] = Number(arr[i + 1]);
  }
  for (let i = 0; i < arr1.length; i += 2) {
    let product = arr1[i];
    if (!newObj.hasOwnProperty(product)) {
      newObj[product] = 0;
    }
    newObj[product] += Number(arr1[i + 1]);
  }
  for (const key in newObj) {
    console.log(`${key} -> ${newObj[key]}`);
  }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
