function triangleOfNumbers(n) {
    let string = "1\n"
    let work = 1;
    for (let i = 2; i <= n; i++) {
        work = i

        if (work > 1) {
            for (let j = 0; j < work; j++) {
                string += work + " "

            }
            string += "\n"
        }
    }
    console.log(string)


} triangleOfNumbers(6)