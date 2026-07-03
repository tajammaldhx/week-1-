// chech string is pallendrome or not with out using reverse
const str = prompt ("Enter the String: ");
const lenght = str.length;
let reverseStr = "";
console.log(lenght);
for(let i = lenght-1; i>=0; i--){
    reverseStr+=str[i];
}
if (str == reverseStr){
    console.log ("The String is pallendrome.");
}else{
    console.log ("The String is not pallendrome.");
}