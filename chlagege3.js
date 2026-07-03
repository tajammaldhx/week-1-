// sum of the positive number in the array
 let arr = [-1 , 2 , 3 , -4 , 5 , 6 , -7 , 8 , -9, 10 ]
 let sum = 0 ;
 for (let i = 0; i<arr.length; i++  ){
    if(arr[i]>0 ){
        sum+=arr[i];
    }
 }
 console.log ("sum of the positive numbers is :", sum);