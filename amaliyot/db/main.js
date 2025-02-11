
let nameBtn = document.querySelector("#name");
let raitingBtn = document.querySelector("#raiting");
let janrBtn = document.querySelector("#janr");
let sortBtn = document.querySelector("#sort");
let btn = document.querySelector("#btn");


let nameVal;
let raitingVal;
let janrVal;
let sortVal;

btn.onclick = () => search();

function search() {
    nameVal = nameBtn.value;
    raitingVal = raitingBtn.value;
    janrVal = janrBtn.value;
    sortVal = sortBtn.value;

    fetch("http://localhost:3030/movie_list").then(res => res.json())
        .then(data => getData(nameVal, raitingVal, janrVal, sortVal, data))
        .catch(err => console.log(err))
}

let g = [];
let content = document.querySelector(".content");
function getData(n, r, j, s, data) {
    console.log(g);
    nameBtn.value = "";
    raitingBtn.value = "";
    content.innerHTML = "";
    if (j == "byy") {
        data = Array(data).sort((a, b) => {
            return a.Year - b.Year;
        })
        console.log(data);
    }
    for (const key in data) {
        if (data[key].Title.toString().includes(n)) {
            if (data[key].Genre.toString().includes(j)) {
                let li = document.createElement("li");
                let img = document.createElement("img");
                let name = document.createElement("p");
                let janr = document.createElement("p");
                name.innerHTML = n;
                janr.innerHTML = data[key].Genre;
                img.src = data[key].Poster;
                li.append(img, data[key].Title, janr);
                content.append(li);
            } else if (j == "all") {
                let li = document.createElement("li");
                let img = document.createElement("img");
                let name = document.createElement("p");
                let janr = document.createElement("p");
                name.innerHTML = n;
                janr.innerHTML = data[key].Genre;
                img.src = data[key].Poster;
                li.append(img, data[key].Title, janr);
                content.append(li);
            }
        }
    }
}