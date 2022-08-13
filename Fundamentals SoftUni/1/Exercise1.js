function solve(age) {
let maturity = "";
if(age <= 2 && age >= 0){
    maturity = "baby";
}else if(age >= 3 && age <= 13){
    maturity = "child";
}else if(age >= 14 && age <= 19){
    maturity = "teenager";
}else if(age >= 20 && age <= 65){
    maturity = "adult";
}else if(age >= 65){
    maturity = "elder"
}else{
    maturity = "out of bounds"
}console.log(maturity)
}solve(15)