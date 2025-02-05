// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


const arr = [1,2, 3, 4]

for(let i=0; i<Math.floor(arr.length)/2; i++){
    
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length -1 - i] = temp;
}

console.log(arr);


// make a for in loop to iterate over an object and logs its key 
let obj = {
    "name": "Mohd",
    "sub": "English"
}

for(let val in obj){
    console.log(val);
}

// use a for each loop and logs the value 

var brr = ["a", "b", "c", "d"];

brr.forEach( (val) => console.log(val));

// find and log the second element of an array 
const crr = [1 , 2, 3, 4, 5];

console.log(`Second element of array is: ${crr[1]}`);


// add two elements in the starting of the array 
var drr = [1, 2, 3, 4];

drr.unshift(0);
drr.unshift(-1);
console.log(drr);

// remove the last elment and log the array 
drr.pop();
console.log(drr)

// use .slice to extract first three elements of the array 
console.log(drr.slice(0, 3))

// check if the value includes

console.log(drr.includes(19)); //give boolearn result

// combine two array using concat
var frr = [1, 2, 3, 4];
var grr = [6, 7, 8];
console.log(frr.concat(grr));

// sort an arrar of numbers [5 , 2, 9, 1];
var ff = [4 , 1, 0];
ff.sort();
console.log("printing after sort: ",ff)

