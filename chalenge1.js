// find the largest and the smallest

let arr = [8 ,5 ,9 ,50 ,225 ,500 ,128 ,400 ];
let large = arr[0];
let small = arr[0];
for(i in arr){
    if ( arr[i]> large){
        large = arr[i];
    }
    if (arr[i]<small){
        small = arr[i];
    }
}
console.log("largest number in the array is :",large);
console.log ("smallest number in the array is :",small);