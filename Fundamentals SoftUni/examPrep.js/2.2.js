function theLift(array) {
    //et maxPlacesOnTheLift = 4;
    // let workArr = array.slice(0, 1).map(Number)
    let pasangers = Number(array[0])
    let pasangerIn = 0;
    let vagons = array[1].split(' ').map(Number)

    for (let i = 0; i < vagons.length; i++) {

        for (let a = 0; vagons[i] < 4; a++) {
            if (pasangers === 0) {
                break;
            }
            vagons[i] = vagons[i] + 1
            pasangerIn++;
            pasangers--;
        }

    }

    const freeVagon = vagons.find((p) => p < 4)

    if (pasangers === 0 && freeVagon) {
        console.log("The lift has empty spots!")
    }

    if (pasangers > 0 && !freeVagon) {
        console.log(`There isn't enough space! ${pasangers} people in a queue!`)
    }


    console.log(vagons.join(" "))



}
theLift([
    "14",
    "0 0 0"
])