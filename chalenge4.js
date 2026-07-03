// check vowels in the string 
let str = "Tajammal";
let isvowel = [];
let vowels = ['A' ,'E' ,'I' ,'O' ,'U' ,'a' ,'e' ,'i' ,'o' ,'u']
for (let i = 0 ; i<str.length; i++){
    for(let j = 0; j< vowels.length; j++){
       if ( vowels[j] === str[i]){
        isvowel.push(str[i]);
       }
    }
}
console.log (isvowel);
console.log ("Number of vowel in the string is :",isvowel.length);
