function division(num){
let firstD = 2
let secoundD = 3
let turthD = 6
let fourthD = 7
let fift = 10
let maxD = 0
let flag = true
if(num % firstD == 0){
    maxD = firstD
    flag = false
}if(num % secoundD == 0){
    maxD = secoundD
    flag = false 
}if(num % turthD == 0){
    maxD = turthD 
    flag = false 
}if(num % fourthD == 0){
    maxD = fourthD
    flag = false
}if(num % fift == 0){
    maxD = fift
    flag = false
}if(flag){
    console.log("Not divisible")
}if(!flag){console.log(`The number is divisible by ${maxD}`)
}
}division(30)
division(15)
division(12)
division(1643)