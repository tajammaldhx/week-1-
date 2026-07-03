
// Reverse the string
const str = "Hello world";
const lenght = str.length;
let reverseStr = "";
console.log(lenght);
for(let i = lenght-1; i>=0; i--){
    reverseStr+=str[i];
}
console.log (reverseStr)
