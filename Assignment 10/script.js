
function userstore() {
    let name = prompt("Enter your name;")
    let age = prompt("whats your age?");
    let userName = prompt("Enter your username;");
    let address = prompt("Enter your address");
    const userdata = {
        name: name,
        age: age,
        userName: userName,
        address: address,
    }
    sessionStorage.setItem('user', JSON.stringify(userdata));
    console.log(userdata);
}

function clearuser() {
    sessionStorage.removeItem('user');
}