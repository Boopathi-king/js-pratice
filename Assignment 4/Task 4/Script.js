/* Write the code which asks for a login with prompt.
If the visitor enters "Admin", then prompt for a password, if the input is an empty line 
or Esc – show “Cancelled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:
• If it equals “TheMaster”, then show “Welcome!”,
• Another string – show “Wrong password”,
• For an empty string or cancelled input, show “Cancelled”
You can use nested if blocks if needed. Mind the overall readability of the code.
Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt 
returns null*/

let login = prompt("Enter your login id:",  "");

if (login === "Admin"){
  let password = prompt("Enter your password:");

  if (password === "TheMaster"){
    alert("Welcome!");
  } else if (password === null || password === ""){
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (login === null || login === ""){
  alert("Cancelled");
} else {
  alert("I don't know you");
}