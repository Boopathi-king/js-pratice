/* 
    Name
    Age >= 18
    weight >= 60
    Bloodgroup---> True
    Bloodpressure--> = 100
    Disease---> false
    Alcohol---> false

*/

let name = prompt ("enter your name","Boopathi");
let age = Number(prompt("enter your age:", 18));
let weight = Number(prompt("enter your weight:", 60));
let bloodGroup = prompt("enter your blood group:",true);
let bloodPressure = Number(prompt("enter your blood pressure:", 100));
let disease = prompt("do you have any disease?", false);
let alcohol = prompt("do you drink alcohol?", false);

console.log("name-->", name);
console.log("age--->", age);
console.log("weight-->", weight);
console.log("Bloodgroup-->",  bloodGroup);
console.log("Bloodpressure-->",  bloodPressure);
console.log("Disease--->", disease);
console.log("Alcohal--->", alcohol);

console.log("-------------------------------------------------");


if (age < 18) {
    console.log("You are not eligible,Age is low");
} else if (weight < 60) {
    console.log("You are not eligible,Weight is low");
} else if (bloodGroup == false) {
    console.log("You are not eligible,Blood group is not matching");
} else if (bloodPressure > 100) {
    console.log("You are not eligible,Blood pressure is high");
} else if (disease == true) {
    console.log("You are not eligible,Disease is present");
} else if (alcohol == true){
    console.log("You are not eligible,Alcohol is consumed");
} else {
    console.log("You are eligible");
}

console.log("-------------------------------------------------------------");
