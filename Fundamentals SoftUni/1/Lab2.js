function solve(name, age, grade){
   let studentName = name;
   let studentAge = Number(age)
   let studentGrade = Number(grade)
    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`)
}
solve("John", 2.00 , 4.563)