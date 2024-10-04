 // API URL
 async function fetchUsers() {
    try{
        const response = await fetch("https://fakestoreapi.com/users");
        // console.log(response);
        

        if (!response.ok) {
            console.log("Data not got");
        }

        const users = await response.json();
        console.log(users);
        
        displayUsers(users);
        } catch(error) {
         console.log("Fetch error=>", error);
    
        }
}

/*{
"address": {
"geolocation": {
"lat": "-37.3159",
"long": "81.1496"
},
"city": "kilcoole",
"street": "new road",
"number": 7682,
"zipcode": "12926-3874"
},
"id": 1,
"email": "john@gmail.com",
"username": "johnd",
"password": "m38rmF$",
"name": {
"firstname": "john",
"lastname": "doe"
},
"phone": "1-570-236-7033",
"__v": 0
},*/

function displayUsers(users) {
const userContainer = document.getElementById("user-container");

const userArr = users.map((user) => {
    return ` 
    <div id= "product- ${user.id}" class = "user-card">
        <p><strong> Name:</strong> ${user.name.firstname} ${user.name.lastname} </p>
        <p><strong> Phone: </storng> ${user.phone}</p>
        <p><strong> Email Id: </strong> ${user.email}</p>
        <p><strong> Address: </strong> ${user.address.street} ${user.address.number} ${user.address.city} ${user.address.zipcode}</p>
        <p><strong> Username: </strong> ${user.username}</p> 
        <p><strong> Password: </strong> ${user.password}</p>
        </div>
    ;`
    })
    .join("");

    userContainer.innerHTML = userArr;
}

fetchUsers();