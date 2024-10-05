// API URL


async function fetchUsers() {
    try{
        const response = await fetch("https://fakestoreapi.com/users");
        // console.log(response);
        

        if (!response.ok) {
            console.log("Data not got");
        }

        const users = await response.json();
        // console.log(users);
        
        displayUsers(users);
        } catch(error) {
         console.log("Fetch error=>", error);
    
        }
}

function displayUsers(users) {
const userContainer = document.getElementById("user-container");
const loadingElement = document.getElementById("loading")

// console.log(userContainer);


const userArr = users.map((user) => {
    return ` 
    <div id= "product- ${user.id}" class = "user-card">
        <p id = "name"><strong> Name:</strong> ${user.name.firstname} ${user.name.lastname} </p>
        <p><strong> Phone: </storng> ${user.phone}</p>
        <p><strong> Email Id: </strong> ${user.email}</p>
        <p><strong> Address: </strong> ${user.address.street} , ${user.address.number} , ${user.address.city} , ${user.address.zipcode}</p>
        <p><strong> Username: </strong> ${user.username}</p> 
        <p><strong> Password: </strong> ${user.password}</p>
    </div>
    `
    })
    .join("");

    console.log(userArr);
    

    userContainer.innerHTML = userArr;
    loadingElement.style.display = 'none';
}

fetchUsers();

function myFunction() {
    var input,filter, users, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    users = document.querySelectorAll(".user-card");

    for (i = 0; i < users.length; i++) {
       txtValue = (users[i].querySelector("#name").textContent || users[i].querySelector("#name").innerHTML)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
           users[i].style.display = "";
        }else{
           users[i].style.display = "none";
        }
    }
};