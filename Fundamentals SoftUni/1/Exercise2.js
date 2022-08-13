function Rounding(numberForRounding, comand){
    let precision = comand
    if(precision > 15){
        precision = 15
    }
let result = numberForRounding.toFixed(precision)
console.log(parseFloat(result))
}
Rounding(3.1415926535897932384626433832795,2)
Rounding(10.5, 2)