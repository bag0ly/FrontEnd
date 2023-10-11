/*document.getElementById('btn').onclick = function(event){
    event.preventDefault
    fetch('https://192.168.10.10:8500/Pizza', {
    method : "GET",
    mode : "cors",
    headers : {
        "Acces-Control-Allow-Origin" : "*"
    }
    })
.then(response => {
    if (!response.ok) {
      console.log("szar a szerver faszkalap")
    }
    return response.json();
    })
    .then(function(response){
        return console.log(response)
    })
}

document.getElementById('btn1').onclick = function(event1){
    event1.preventDefault
    idInput = document.getElementById("idInput").value
    fetch('https://192.168.10.10:8500/Pizza/' + idInput, {
    method : "GET",
    mode : "cors",
    headers : {
        "Acces-Control-Allow-Origin" : "*"
    }
    })
.then(response => {
    if (!response.ok) {
      console.log("szar a szerver faszkalap")
    }
    return response.json();
    })
    .then(function(response){
            console.log(response);
    })
}*/
var state=[];
document.getElementById("login").onsubmit=function(event){
    event.preventDefault();
    var email = event.target.elements.email.value;
    var password = event.target.elements.password.value;
    var body = JSON.stringify({
        email: email,
        password: password
    })

fetch('https://reqres.in/api/login/',{
        method: 'POST',
        body: body,
        headers: {
        'Content-Type':'application/json'
    }
    })
    .then(function(response){
        if (!response.ok) {
            return Promise.reject('Login failed')
        }
        return response.json();
    })
    .then(function(response){
        return fetch('https://reqres.in/api/users')
    })    
    .then(function(response){
        if (!response.ok) {
            return Promise.reject()
        }
        return response.json();
    })
    .then(function(userPage) {
        console.log(userPage)
        state=userPage.data;
        renderUsers();
    })
    .catch(function(error){
        console.log(error)
    })
}



function renderUsers(){
    var userHTML = '';
    for (var user of state) {
        userHTML+=`<li class="List-group-item">${user.first_name} ${user.last_name}</li>
        <li class="list-group-item">${user.email}</li> 
        <li class="list-group-item"><center><img src="${user.avatar}"></center></li> 
        <li class="list-group-item" />`

        
    }
    document.getElementById("user-lista-container").innerHTML=`<ul class=""list-group>${userHTML}</ul>`
}