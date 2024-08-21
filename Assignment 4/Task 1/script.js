/* Using if..else, write the code which gets a number via prompt and then shows in alert:
if the value is greater than zero, show 1
if less than zero, show -1
if equals zero, then show 0
In this task we assume that the input is always a number.*/


let number = Number(prompt("Enter the number:", 2));

if (number > 0){
    alert(1);
} else if (number < 0){
    alert(-1);
} else (number == 0) 
{
    alert(0);
}