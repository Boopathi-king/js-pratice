/* Coverts the below if-else into switch statements
let fruit = 'apple';
if (fruit === 'apple') {
 console.log('You chose an apple.');
} else if (fruit === 'banana') {
 console.log('You chose a banana.');
} else if (fruit === 'orange') {
 console.log('You chose an orange.');
} else {
 console.log('Unknown fruit.');
}
*/

let fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('You choose an apple.');
    break;
  case 'banana':
    console.log('You choose a banana.');
    break;
  case 'orange':
    console.log('You choose an orange.');
    break;
  default:
    console.log('Unknown fruit.');
}
