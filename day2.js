
// log character of javascript 

// let str = "Mohd";

// for(let char of str){
//     console.log(char);
// }



// console.log("Printing odd numbers")
// for(let i=1; i <= 20; i++){
//     if(i % 2 !== 0) {}
//     else console.log(i);
// }


// use a do while loop to print number from 1 to 5
let num = 5;
do{
    console.log(num);
    num--;
}while(num !== 0)


// create a for loop that calculate the factorial of 5

let fact = 1;
for(let i=1; i<=5; i++){
    fact = fact * i;   
}
console.log(`Fact of 5 is: ${fact}`);


// write a nested loop to print 3X3 grid of numbers


// print the number in the grid format 

var hold = 1;
for(var i=1; i < 4; i++){
    var str = " ";
    for(var j = 1; j < 4; j++){
        str += `${hold} `;
        hold++;
        
    }
    console.log(str);
}

// use a for loop to reverse an array 
var brr = [1, 2, 3, 4, 5, 6];
  
// brr.reverse();
for(let i = brr.length-1; i >= 0; i--){
    console.log(i);
}

