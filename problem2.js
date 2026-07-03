// Find what two arrays have in common, without using filter() and includes() together
let arr1 = [1 ,2 ,3 ,4 , 5 ];
let arr2 = [4, 5, 6, 7, , 9];
let clean = [];
let duplicate = [];
for (let i = 0; i<arr1.length; i++){
    let num =arr1[i];
    if(arr2.includes(num)){
        duplicate.push(num);
    }
    else{
        clean.push(num);
    }
}        
console.log(`${duplicate} are commen in the two array.`);
