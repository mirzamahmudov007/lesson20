let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let login = document.getElementById("login");
let password = document.getElementById("password");
let email = document.getElementById("email");

let btn = document.getElementById("btn");

btn.onclick = () => register(firstname.value, lastname.value, login.value, password.value, email.value);



function register(fn, ln, login, pass, email) {
    var data = {
        name: fn,
        lastName: ln,
        email: email,
        login: login,
        password: pass
    };

    // Fetch API orqali POST so'rovi
    fetch('http://localhost:8081/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            window.location = "./index.html";
        })
        .catch(error => {
            console.error('Xatolik:', error);
        });
}
