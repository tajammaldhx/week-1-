
// split 23 candies amoung the students
let candies = 23;
let students = 5;
function split_candies (candy , student){
    let student_get = parseInt (candy/student);
    let remaining = candy%student;
    return [student_get, remaining];
}
let result = split_candies(candies,students);
console.log (`Every student got ${result[0]} candies and ${result[1]} candies are remaining`)