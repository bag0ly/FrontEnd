
var state=[];
document.getElementById("login").onsubmit=function(event){
    event.preventDefault();
    var email = event.target.elements.email.value;
    var password = event.target.elements.password.value;
    var body = JSON.stringify({
        email: email,
        password: password
    })

fetch('https://pizza.kando-dev.eu/Pizza')
    .then(function(response){
        if (!response.ok) {
            return Promise.reject('Login failed')
        }
        return response.json();
    })
    .then(function(pizza) {
        console.log(pizza)
        state=pizza;
        renderPizza();
    })
    .catch(function(error){
        console.log(error)
    })
}



function renderPizza(){
    var pizzaHTML = '';
    for (var pizza of state) {
        pizzaHTML+=`<li class="List-group-item">${pizza.name} ${pizza.isGlutenFree ? "true" : "false"}</li>
        <li class="list-group-item"><img src="${pizza.kepURL}"></li> 
        <li class="list-group-item" />`

        
    }
    document.getElementById("user-lista-container").innerHTML=`<ul class=""list-group>${pizzaHTML}</ul>`
}