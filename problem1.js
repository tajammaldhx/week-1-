const student =[
     {name: "Ali", score: 75},
     {name: "Ahmad", score: 80},
     {name: "Abdullah", score: 92}
];
let NoOfStd = student.length;
let highNum = student[0]
function highest_num (student) {
    for (let i = 1; i<NoOfStd; i++){
        if(student[i].score > highNum.score){
            highNum = student [i];
        }
    }
   return highNum
}
let highest_scorer=highest_num(student);
console.log(`${highest_scorer.name} got the hiehest score ${highest_scorer.score}`)
