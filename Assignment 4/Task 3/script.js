// Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two 
// variants: the first one using NOT !, the second one – without it.


let age = Number(prompt("Enter your age"));

if (!(age >= 14 && age <= 90)) {
    console.log("Age is not inclusively with inverse");
} 

console.log("--------------------------------------");

if (age < 14 || age > 90) {
    console.log("Age is not inclusively");    
}

console.log("----------------------------------------");
