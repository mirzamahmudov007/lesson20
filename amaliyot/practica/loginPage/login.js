let login = document.getElementById("login");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = () => check(login.value, password.value);

function check(username, password) {
    var data = {
        login: username,
        password: password
    };

    // Fetch API orqali POST so'rovi
    fetch('http://localhost:8081/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.idToken != null) {
                window.location = "./success.html";
            } else {
                console.log("b");
            }

        })
        .catch(error => {
            console.error('Xatolik:', error);
        });
}

const fileInput = document.getElementById('file'); // HTML fayl tanlov elementi

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:8081/api/convertImageToString', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Qaytadan qaytarilgan javobni ko'rish
            })
            .catch(error => {
                console.error('Xatolik yuz berdi:', error);
            });
    }
});
