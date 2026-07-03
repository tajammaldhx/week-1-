// STUDENT MANAGEMENT SYSTEM
let students =[
    {id: 1,
     name: "Ali",
     marks: "80"   
    },
     {id: 2,
     name: "Ahmad",
     marks: "89"   
     },
     {id: 3,
     name: "Ahad",
     marks: "78"   
     },
     {id: 4,
     name: "Umar",
     marks: "98"   
     },
     {id: 5,
     name: "Abu bakar",
     marks: "99"   
     },
     {id: 6,
     name: "usman",
     marks: "97"   
     },
     {id: 7,
     name: "Fahad",
     marks: "33"   
     },
]
 

// display all student
 
function displaystudents(){
    console.table(students);
}

// add student

function addStudent (id,name,marks){
    const student={
        id : id,
        name : name,
        marks : marks 
        }
    
    students.push(student);
    console.log(`${name} is added sucessfully`);
}

// remove student 
 
function delstudent(id){
     const index = students.findIndex(student => student.id ===id);
     if (index !== -1){
        students.splice(index,1);
        console.log(`${students[index].name} is deleted successfull`)
     }else{
        console.log ("student not found");
     }
}

//  update marks

function updatemarks(id , newmarks){
  const student = students.find(student=> student.id == id)
  if (student){
    students.marks = newmarks;
    console.log (`${student.name}'s marks updated`);
  }else{
    console.log("student not found");
  }
}

// find the topper

function findTopper(){
  let topper = students[0];
  for(let student in students){
    if(student.marks > topper.marks){
        topper = student;
    }
  }
  console.table(topper);
}

// search student

function searchStd(name){
    const student = students.find(student=>
             student.name.toLowerCase() === name.toLowerCase()
    )
    if (student){
        console.table(student);
    }else{
        console.log("student not found");
    }
}


// count passed


function countpass(){
    let pass = 0;
    for (student of students){
        if(student.marks >= 40){
            pass++;
        }
    }
    console.log (`${pass} students are pass`)
}
    
// count failed


function countfail(){
    let fail = 0;
    for (student of students){
        if(student.marks < 40){
            fail++;
        }
    }
    console.log (`${fail} students are fail`)
}


// count student


function countstd(){
    let length =students.length; 
    console.log (`${length} students are present in the school.`)
}


// convert to json

function convertToJson(){
    const jsondata = JSON.stringify(students);
    console.log(jsondata);

    const origionaldata = JSON.parse(jsondata);
    console.table(origionaldata);
}


displaystudents();
addStudent (8 , "Akbar", 65);
delstudent(4);
updatemarks(6 , 85);
findTopper();
searchStd("umar");
countpass();
countfail();
countstd();
convertToJson();