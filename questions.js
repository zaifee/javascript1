
// console.log("Mohd Nawaz", "Love Codding")

// console.log(25 * 3 + 5);

const findYear = new Date();
console.log(findYear.getFullYear());

// 4. 
const firstName = "Mohd";
const lastName = "Nawaz";

// console.log(`${firstName} ${lastName}`)

// 5. 
// var a = 5;
// console.log(a);
// a = 20;
// console.log(a);

// 7 : log square of a number
// let num = 12;
// console.log("Square of a number is: " ,num*num)
// console.log(typeof num) 

// 8: create a varibale age and check age is greater than 18

// let age = 22;
// if(age > 18){
//   console.log("You're an adult.")
// }else{
//   console.log("you're a kid, enjoy")
// }

// save the value of in var and log it 
const pi = Math.PI;
console.log(pi);

// reassgin a value to the var declared with let 

let im = 23;
im = 24;
console.log("New value of im " + im);

// check the type of null 
console.log(typeof null) //object

// null === null it give true


console.log(typeof NaN) //number 
console.log(NaN === NaN) //false

// create a variable as string and log its type 
var str1 = "23";
console.log(typeof str1); //string

// check the type of boolearn 
var str2 = false;
console.log(typeof str2) //boolean

// create three variables of three types number, string, boolean and log there types 

var num1 = 23;
console.log(num1);
var num2 = false;
console.log(num2); //false
var num3 = "n";
console.log(num3);

// create a variable with undefined and log its vallue 

let a = undefined;
console.log(typeof a);

const arr = [1, 2, 3, 4, 5];
// arr = [5, 6, 4, 5];//typeError

// use a while loop to print number from 1 to 50;
let i = 1;
while(i <= 50){
  console.log(i);
  i++
}

// use a while to print the sum from 1 to 15
let sum = 0;
let i1 = 0;
while(i1 <= 15){
  sum += i1;
  i1++;
}
console.log(sum);
