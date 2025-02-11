
let tbodyElement = document.getElementById("tbody");

function getStudentsAll() {
    fetch("http://localhost:3030/students")
        .then(res => res.json())
        .then(data => {
            let totalCount = 0;
            let connectedCount = 0;

            data.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });

            data.map(element => {
                totalCount++;
                if (element.age >= 16 && element.age <= 30) {
                    connectedCount++;
                    let trElement = document.createElement("tr");
                    let tdName = document.createElement("td");
                    tdName.innerText = element.name;
                    let tdAge = document.createElement("td");
                    tdAge.innerText = element.age;
                    let tdPhoneNumber = document.createElement("td");
                    tdPhoneNumber.innerText = element.phoneNumber;
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = element.email;
                    let tdCity = document.createElement("td");
                    tdCity.innerText = element.city;
                    let tdStatus = document.createElement("button");
                    tdStatus.innerText = "Active";
                    tdStatus.classList.add("rounded", "text-dark", "bg-primary", "border-0", "ps-3", "pe-3", "pt-0", "pb-0", "mt-2");

                    let deleteBtn = document.createElement("button");
                    deleteBtn.innerText = "Delete";
                    deleteBtn.onclick = (e) => deletedBtn(e, element.id);

                    tdStatus.onclick = (e) => isActive(e, element.id);

                    deleteBtn.classList.add("rounded", "text-dark", "bg-danger", "border-0", "ps-3", "pe-3", "pt-0", "pb-0", "mt-2", "ms-2");

                    trElement.append(tdName, tdAge, tdPhoneNumber, tdEmail, tdCity, tdStatus, deleteBtn);
                    tbodyElement.append(trElement);
                }
            })
            let totalValue = document.getElementById("totalValue");
            totalValue.innerHTML = totalCount;

            let ConnectedValue = document.getElementById("ConnectedValue");
            ConnectedValue.innerHTML = connectedCount;

        })
}


getStudentsAll();

function deletedBtn(e, id) {
    e.preventDefault();
    fetch(`http://localhost:3030/students/${id}`, {
        method: 'delete'
    }).then(data => {
        console.log('Malumot ochirildi:', data);
    })
        .catch(err => {
            console.error('Xatolik yuz berdi:', err);
        });

    // tbodyElement.innerHTML = "";
    e.target.parentElement.style.display = "none";
}



let activeVal = document.getElementById("studyNowValue");
activeVal.innerText = "0";
let activeCount = 0;
function isActive(e, id) {
    e.preventDefault();
    if (e.target.innerText == "Active") {
        activeCount++;
        e.target.innerText = "Inactive";
        e.target.classList.add("bg-secondary");
        activeVal.innerText = activeCount;
    } else if (e.target.innerText == "Inactive") {
        activeCount--;
        e.target.innerText = "Active";
        e.target.classList.remove("bg-secondary");
        activeVal.innerText = activeCount;
    }
}



let search = document.getElementById("search");
search.addEventListener("input", () => {
    if (search.value != "") {
        tbodyElement.innerHTML = "";
    }
    fetch("http://localhost:3030/students")
        .then(res => res.json())
        .then(data => {

            let totalCount = 0;
            let connectedCount = 0;
            data.map(element => {
                totalCount++;

                if (element.name.toLowerCase().includes(search.value.toLowerCase())) {
                    if (element.age >= 16 && element.age <= 30) {
                        connectedCount++;
                        let trElement = document.createElement("tr");
                        let tdName = document.createElement("td");
                        tdName.innerText = element.name;
                        let tdAge = document.createElement("td");
                        tdAge.innerText = element.age;
                        let tdPhoneNumber = document.createElement("td");
                        tdPhoneNumber.innerText = element.phoneNumber;
                        let tdEmail = document.createElement("td");
                        tdEmail.innerText = element.email;
                        let tdCity = document.createElement("td");
                        tdCity.innerText = element.city;
                        let tdStatus = document.createElement("button");
                        tdStatus.innerText = "Active";
                        tdStatus.classList.add("rounded", "text-dark", "bg-primary", "border-0", "ps-3", "pe-3", "pt-0", "pb-0", "mt-2");

                        let deleteBtn = document.createElement("button");
                        deleteBtn.innerText = "Delete";
                        deleteBtn.onclick = (e) => deletedBtn(e, element.id);

                        tdStatus.onclick = (e) => isActive(e, element.id);

                        deleteBtn.classList.add("rounded", "text-dark", "bg-danger", "border-0", "ps-3", "pe-3", "pt-0", "pb-0", "mt-2", "ms-2");

                        trElement.append(tdName, tdAge, tdPhoneNumber, tdEmail, tdCity, tdStatus, deleteBtn);
                        tbodyElement.append(trElement);
                    }
                }

            })
            let totalValue = document.getElementById("totalValue");
            totalValue.innerHTML = totalCount;

            let ConnectedValue = document.getElementById("ConnectedValue");
            ConnectedValue.innerHTML = connectedCount;

        })
})


let select = document.getElementById("select");
select.addEventListener("input", (e) => {
    fetch("http://localhost:3030/students")
        .then(res => res.json())
        .then(data => {
            let totalCount = 0;
            let connectedCount = 0;

            if (select.value == "age") {
                tbodyElement.innerHTML = "";
                data = data.sort((a, b) => {
                    return a.age - b.age;
                })
            }


            if (select.value == "ager") {
                tbodyElement.innerHTML = "";
                data = data.sort((a, b) => {
                    return b.age - a.age;
                })
            }

            if (select.value == "az") {
                tbodyElement.innerHTML = "";
                data = data.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }

            data.map(element => {
                totalCount++;


                if (element.age >= 16 && element.age <= 30) {
                    connectedCount++;
                    let trElement = document.createElement("tr");
                    let tdName = document.createElement("td");
                    tdName.innerText = element.name;
                    let tdAge = document.createElement("td");
                    tdAge.innerText = element.age;
                    let tdPhoneNumber = document.createElement("td");
                    tdPhoneNumber.innerText = element.phoneNumber;
                    let tdEmail = document.createElement("td");
                    tdEmail.innerText = element.email;
                    let tdCity = document.createElement("td");
                    tdCity.innerText = element.city;
                    let tdStatus = document.createElement("button");
                    tdStatus.innerText = "Active";
                    tdStatus.classList.add("rounded", "text-dark", "bg-primary", "border-0", "ps-3", "pe-3", "pt-0", "pb-0", "mt-2");

                    let deleteBtn = document.createElement("button");
                    deleteBtn.innerText = "Delete";
                    deleteBtn.onclick = (e) => deletedBtn(e, element.id);

                    tdStatus.onclick = (e) => isActive(e, element.id);

                    deleteBtn.classList.add("rounded", "text-dark", "bg-danger", "border-0", "ps-3", "pe-3", "pt-0", "pb-0", "mt-2", "ms-2");

                    trElement.append(tdName, tdAge, tdPhoneNumber, tdEmail, tdCity, tdStatus, deleteBtn);
                    tbodyElement.append(trElement);
                }
            })
            let totalValue = document.getElementById("totalValue");
            totalValue.innerHTML = totalCount;

            let ConnectedValue = document.getElementById("ConnectedValue");
            ConnectedValue.innerHTML = connectedCount;

        })
})