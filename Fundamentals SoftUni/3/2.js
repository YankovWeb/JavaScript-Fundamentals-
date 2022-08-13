function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let work = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let work2 = arr2[j];
            if (work === work2) {
                console.log(work);
            }
        }
    }
}
commonElements(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
);
