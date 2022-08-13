function picolo(data) {
  //     · Records a car number for every car that enters the parking lot
  let objRecord = new Set();
  data.forEach((element) => {
    let [value, key] = element.split(", ");
    switch (value) {
      case "IN":
        objRecord.add(key);
        break;
      case "OUT":
        objRecord.delete(key);
    }
  });
  if (objRecord.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sortParking = Array.from(objRecord.values()).sort();
    console.log(sortParking.join("\n"));
  }
}
picolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
