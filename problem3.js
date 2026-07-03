// Find duplicates in an array
let arr = ['t','a','j','a','m','m','a','l'];
let clean = [];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  let currentNumber = arr[i];
  if (clean.includes(currentNumber)) {
    duplicates.push(currentNumber); 
  } else {
    clean.push(currentNumber);
  }
}

console.log(`duplicates are ${duplicates}`);
console.log(`clean array is ${clean}`);