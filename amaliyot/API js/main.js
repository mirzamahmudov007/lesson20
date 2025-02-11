fetch('http://localhost:8083/api/users/get')
    .then(response => response.json())
    .then(data => get(data))
    .catch(error => console.error('Xatolik:', error));

let ul = document.querySelector("ul");



function get(data) {
    ul.innerHTML = "";
    for (const key in data) {
        let li = document.createElement("li");

        let id = document.createElement("p");
        id.innerHTML = data[key].id;
        let pName = document.createElement("p");
        pName.innerHTML = data[key].name;
        let pUsername = document.createElement("p");
        pUsername.innerHTML = data[key].username;
        let pGmail = document.createElement("p");
        pGmail.innerHTML = data[key].gmail;

        let del = document.createElement("button");
        del.innerHTML = "DELETE";

        del.onclick = (e) => deleteData(e);
        li.append(id, pName, pUsername, pGmail, del);
        ul.append(li);
    }
}

let obj = {
    name: "",
    username: "",
    gamil: ""
};

let btn = document.querySelector("button");
function save() {
    obj.name = btn.previousElementSibling.previousElementSibling.previousElementSibling.value;
    obj.username = btn.previousElementSibling.previousElementSibling.value;
    obj.gmail = btn.previousElementSibling.value;

    fetch('http://localhost:8083/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    fetch('http://localhost:8083/api/users/get')
        .then(response => response.json())
        .then(data => get(data))
        .catch(error => console.error('Xatolik:', error));


}

function deleteData(e) {
    // main.js
    const idToDelete = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML; // O'chiriladigan obyektni identifikatori

    fetch(`http://localhost:8083/api/delete/${idToDelete}`, {
        method: 'DELETE',
    })
        .then(response => response.text())
        .then(data => {
            console.log('Qaytgan ma\'lumot:', data);
            // data o'zgartirilgan ma'lumotlarni JavaScript-da ishlash uchun foydalanishingiz mumkin
        })
        .catch(error => console.error('Xatolik:', error));
       
        fetch('http://localhost:8083/api/users/get')
        .then(response => response.json())
        .then(data => get(data))
        .catch(error => console.error('Xatolik:', error));
}


