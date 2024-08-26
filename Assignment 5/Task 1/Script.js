//  Logical Operators
//  1. Problem: Write a function that takes two boolean values and returns true if both are true, 
// otherwise false.

let val1 = 1;
let val2 = 3;

if (val1 > 0 && val2 > 0){
    console.log("Both values are true");
} else{
    console.log("Funcion is false");
    
}

console.log("--------------------------------------");


// 2.Problem: Write a function that checks if a number is between 10 and 20 (inclusive) using 
// logical operators

let num = Number(prompt("Enter Number:-"));

if (num > 10 && num < 20){
    console.log("Nnumber is between 10 to 20 inclusive");
} else {
    console.log("Number is not between 10 to 20 inclusive");
}

console.log("--------------------------------------------------------------");


// 3.Problem: Create a function that returns true if a number is either less than 5 or greater than 
// 15.

let num1 = Number(prompt("Enter the number"));



if (num1 < 5 || num1 > 15) {
    console.log("Number is either less than 5 or greater than 15");
} else {
    console.log("Number is not either less than 5 or greater than 15");
}

console.log("--------------------------------------------------------------");

// 4.Problem: Write a function that takes two boolean values and returns true if exactly one of 
// them is true.

let num2 = Number(prompt("Enter the number:-"));

if (num2 >= 10 || num2 <=15){
    console.log("Number is either greater than 10 or less than 15");
} else {
    console.log("Number is not either greater than 10 or less than 15");
}