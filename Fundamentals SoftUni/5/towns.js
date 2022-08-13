function objectsDemo(input) {
  let listObject = {};
  for (let city of input) {
    let cityElements = city.split(" | ");

    let townName = cityElements[0];
    let townLatitude = +cityElements[1];
    let townLongitude = +cityElements[2];

    listObject.town = townName;
    listObject.latitude = townLatitude.toFixed(2);
    listObject.longitude = townLongitude.toFixed(2);
    console.log(listObject);
  }
}
objectsDemo([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
