/* What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a;
let d = b++;
find the final value for a, b, c ,d */

let a = 1;
let b = 1;
let c = ++a;
let d = b++;

console.log("value of a-->", a);
console.log( "Value of b-->", b);
console.log( "Value of c-->", c);
console.log( "Value of d-->", d);
console.log("---------------------");



/*What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2);*/

let e = 2;
let x = 1 + (e *= 2); 

console.log("Result of x-->", x);
console.log("---------------------");

/* What are results of these expressions?
"" + 1 + 0 = ?
"" - 1 + 0 = ?
true + false = ?
6 / "3" = ?
"2" * "3" = ?
4 + 5 + "px" = ?
"$" + 4 + 5 = ?
"4" – 2 = ?
"4px" – 2 = ?
" -9 " + 5 = ?
" -9 " – 5 = ?
null + 1 = ?
undefined + 1 = ?
" \t \n" – 2 = ?*/

console.log("1.","" + 1 + 0  );

console.log("2.","" - 1 + 0  );

console.log("3.",true + false);

console.log("4.", 6 / "3");

console.log("5.", "2" * "3");

console.log("6.",  4 + 5 + "px");

console.log("7.",  "$" + 4 + 5 );

console.log("8.", "4" - 2);

console.log("9.", "4px" - 2);

console.log( "10.", "-9 " + 5 );

console.log("11.",  "-9 " - 5);

console.log("12.",  null + 1);

console.log("13",  undefined + 1);

console.log("14",  " \t \n" - 2);

console.log("--------------------------------");


/* Here’s a code that asks the user for two numbers and shows their sum.
It works incorrectly. The output in the example below is 12 (for default prompt 
values).
Why? Fix it. The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12
*/

let p = prompt("First number?", 1);
let g = prompt("Second number?", 2);
alert(+p + +g); // Outputs 3


