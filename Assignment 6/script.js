/* 1.Population check;-
Given let population = 1_380_000_000;, check if the population is greater than 1 billion. Print 
"High Population" if true, otherwise print "Low Population."  
*/

let population = 1_380_000_000;

if (population > 1_000_000_000) {
    console.log("High Population");
} else {
    console.log("Low Population");
}    

console.log("------------------------------------------");

/* 2.Round Down:
Write a function that takes a decimal number and returns it rounded down to the nearest 
integer.
Example: round Down(12.9) should return 12*/

console.log("Round down--->", Math.floor(12.9));
console.log("------------------------------------------");

/* 3.Random number
Generate a random integer between 540 and 1000 and print the result.
*/

let randomnumber = Math.ceil(Math.random() * (1000 - 540)+ 540)
console.log("Randomnumber----> ", randomnumber);
console.log("---------------------------------------------");


/* 4.Person object
Create an object person with properties name, age, and city. Print the name and city values from 
the object.
*/

let person = {
    name : 'Mani',
    age : 25,
    city : 'Bangalore'
}

console.log("Name ----->", person.name);
console.log("City----->", person.city);
console.log("-------------------------------");


/* 5.Add property:-
Add a new property isStudent with the value true to the person object you created earlier. Print 
the updated object.
*/

person.isStudent = true;
console.log(person);
console.log("-------------------------------");

/* 6.Find position:-
Given the string let fruit = "banana";, find and print the position of the first occurrence of the 
letter 'a'.
*/

let fruit = "banana";
console.log("first occurrence of the letter a",  fruit.indexOf('a'));
console.log("---------------------------------------");

/*7.Convert case 
Write a function that takes a string and returns it in uppercase.
Example: convert To Upper("hello") should return "HELLO".
*/

let animal = "whitehorse";
console.log("Upper case---->", animal.toUpperCase());
console.log("----------------------------------------");


/*9.Check start 
Check if the string "Hello, World" starts with the word "Hello". Print true or false based on the 
result.
*/

let welcome = "Hello, World";

console.log("Check  start---->", welcome.startsWith("Hello"));
console.log("---------------------------");

/*10. Nested Object:
Create an object employee with a nested address object that includes street, city, and zip
properties. Print the city from the address object.
 */


let employee = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Coimbatore",
        zip: "12345"
    }
}

console.log("Nested object of city---->", employee.address.city);
console.log("-------------------------------------------");

/* 11.Last Character:
Write a function that returns the last character of a given string.
Example: getLastChar("javascript") should return "t".
*/

let lastChar = "Javascript";

console.log("Last character---->", lastChar.charAt(9));
console.log("--------------------------------------------");


/*12.Square calculation:-
Write a function that calculates and returns the square of a number.
Example: square(4) should return 16.
 */

console.log("Square of number---->", Math.pow(4, 2));
console.log("------------------------------------");

/* 13.Update Nested Object:
Create an object car with properties brand, model, and features (which is a nested object). 
Update the features to change the fuel type to "electric" and print the updated car
object.
*/

let car ={
    brand: "Toyota",
    model: "Camry",
    features:{
        transmission: "auto",
        fueltype: "hybrid",
    }
}

car.features.fueltype = "Electiric";

console.log(car);
console.log("-----------------------------------");


/* 14.Extract Word:
Write a function that extracts and returns the first word from the string "JavaScript is 
fun".
*/

let word = "Javascript is fun";

console.log("Extract word from line--->", word.slice(0, 10));
console.log("---------------------------------");


/* 15.Integer check
Write a function that checks if a given number is an integer. If it is, print "Integer", 
otherwise print "Not an Integer."
*/

function checkInteger(Num) {
    if (Number.isInteger(Num)){
        console.log("Integer");
    } else {
        console.log("Not an Integer");
    }
}

checkInteger(10);
checkInteger(11.5);

console.log("--------------------------------");

/*16.Substring Search:
Write a function that checks if the string "I love coding" contains the word "love." If it 
does, print "Substring found", otherwise print "Substring not found."
 */

function checkSubstring(){
    let word = "I love coding";
    let substring = "love";
    if (word.includes("love")){
        console.log("Substring found");
    } else {
        console.log("Substring not found");
    }
}

checkSubstring();
console.log("--------------------------");


/*17.Day Message:
Write a function that takes a string representing a day of the week (e.g., "Monday") and 
returns a message based on the day. Use logic to return "Start of the week" for 
"Monday", "Midweek" for "Wednesday", and "Weekend" for "Saturday" and "Sunday."
For other days, return "Regular day."
*/

function dayMessage(week) {
    switch(week) {
        case "Monday":
            return "Start of the week";
        case "Wednesday":
            return "Midweek";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Regular day";
    }
}

console.log(dayMessage("Monday"));
console.log(dayMessage("Tuesday"));
console.log(dayMessage("Wednesday"));
console.log(dayMessage("Saturday"));
console.log("------------------------------------");


/*18.Simple Calculator:
Create an object calculator with two properties num1 and num2 and a method that returns 
the sum of num1 and num2.
 */

let calculator = {
    num1: 50,
    num2: 25,
    add: function() {
        return this.num1 + this.num2
    }
}

console.log("Calculator---->", calculator.add());
console.log("--------------------------------------");


/*19.Random Numbers:
Write a function that generates 5 random integers between 1 and 50 and prints each number.
 */

function generateNumber() {
    for (i=1; i < 6; i++){
        let randomIntegerNumber = Math.floor(Math.random()* (50) + 1);
        console.log(randomIntegerNumber);
    }
}

generateNumber();

console.log("--------------------------------------");

/*20.Book Object 
Create an object book with properties title, author, and description. Write a function 
that checks if the description contains a specific word (e.g., "bestseller"), and if it does, 
update the object by adding a new property isBestseller with the value true.
*/ 

let book = {
    title: "Jackie chan adventure",
    author: "Jackie Chan",
    description: "This is a bestseller book"
    }

function checkBestSeller(book) {
    if (book.description.includes("bestseller"));
    book.isBestseller = true;
}

checkBestSeller(book);

console.log(book);

console.log("--------------------------------------");
