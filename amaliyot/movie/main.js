
let cardGroup = document.querySelector("#card-group");
let selectJ = document.querySelector("#selectJ");
let selectR = document.querySelector("#selectR");
let body = document.querySelector("body");
let optionJ = [];
let mySet = new Set();
renderAll = () => {
    fetch("http://localhost:3030/movie_list")
        .then(res => res.json())
        .then(data => {
            data.map((element, index) => {

                let arr = element.Genre.split(",");
                arr.map((val) => {
                    mySet.add(val.trim());
                })
                optionJ = Array.from(mySet);
                if (index == 99) {
                    optionJ.map((val) => {
                        let optionJElement = document.createElement("option");
                        optionJElement.innerHTML = val;
                        optionJElement.value = val.toLowerCase();
                        selectJ.append(optionJElement);
                    })
                }
                let card = document.createElement("div");
                card.classList.add("card", "col-5", "mb-3");
                let cardImgDiv = document.createElement("div");
                cardImgDiv.classList.add("card-img");
                cardImgDiv.style.height = "300px";
                let cardImg = document.createElement("img");
                cardImg.classList.add("mw-100");
                cardImg.style.height = "300px";
                cardImg.style.marginTop = "10px";
                cardImg.style.minWidth = "100%";
                cardImg.src = element.Poster;
                cardImg.alt = "Rasm topilmadi!";
                cardImgDiv.append(cardImg);
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                let title = document.createElement("p");
                title.innerHTML = element.Title;
                let year = document.createElement("p");
                year.innerText = element.Year;
                let raiting = document.createElement("p");
                let janr = document.createElement("p");
                janr.innerHTML = element.Genre;
                raiting.innerText = element.Ratings[0].Value;

                let btnBox = document.createElement("div");

                let btnTrailer = document.createElement("a");
                btnTrailer.innerHTML = "Trailer";
                btnTrailer.classList.add("btn", "btn-danger");
                btnTrailer.href = element.trailerLink;


                let moreInfo = document.createElement("button");
                moreInfo.innerHTML = "more info";
                moreInfo.classList.add("btn", "btn-success", "ms-2");

                moreInfo.addEventListener("click", (e) => {
                    moreInfo.setAttribute("data-bs-toggle", "modal");
                    moreInfo.setAttribute("data-bs-target", "#exampleModal");
                });

                btnBox.append(btnTrailer, moreInfo);
                cardBody.append(title, year, raiting, janr, btnBox);
                // console.log(cardBody);
                card.append(cardImgDiv, cardBody);
                cardGroup.append(card);

            })
        })
}

renderAll();


function getOptionJ(g) {
    console.log(g);
    let arr = g.split(",");
    arr.map((val) => {
        mySet.add(val);
    })

    return mySet;

}


// ++Search input


let movieName = document.getElementById("name");
let movieRaiting = document.getElementById("raiting");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) = search);

function search(e) {
    cardGroup.innerHTML = "";
    fetch("http://localhost:3030/movie_list")
        .then(res => res.json())
        .then(data => {
            
            if (selectR.value == "y") {
                data = data.sort((a, b) => {
                    return b.Year - a.Year;
                })
            }

            else if (selectR.value == "yr") {
                data = data.sort((a, b) => {
                    return a.Year - b.Year;
                })
            }

            

            data.map(element => {
                if (element.Title.toString().toLowerCase().includes(movieName.value.toString().toLowerCase())) {

                    // console.log(typeof Number(element.Ratings[0].Value.toString().substr(0, 2)));
                    // console.log(Number(movieRaiting.value));
                    // console.log(element.Ratings[0].Value.toString().substr(0, 3));
                    if (Number(element.Ratings[0].Value.toString().substr(0, 3)) >= Number(movieRaiting.value)) {
                        // console.log(element.Genre.toLowerCase());
                        // console.log(element.Genre + "SALOM");

                        if (element.Genre.toLowerCase().includes(selectJ.value) || selectJ.value == "all") {

                            let card = document.createElement("div");
                            card.classList.add("card", "col-5", "mb-3");
                            let cardImgDiv = document.createElement("div");
                            cardImgDiv.classList.add("card-img");
                            cardImgDiv.style.height = "300px";
                            let cardImg = document.createElement("img");
                            cardImg.classList.add("mw-100");
                            cardImg.style.height = "300px";
                            cardImg.style.marginTop = "10px";
                            cardImg.style.minWidth = "100%";
                            cardImg.src = element.Poster;
                            cardImgDiv.append(cardImg);
                            let cardBody = document.createElement("div");
                            cardBody.classList.add("card-body");
                            let title = document.createElement("p");
                            title.innerHTML = element.Title;
                            let year = document.createElement("p");
                            year.innerText = element.Year;
                            let raiting = document.createElement("p");
                            let janr = document.createElement("p");
                            janr.innerHTML = element.Genre;
                            raiting.innerText = element.Ratings[0].Value;


                            let btnBox = document.createElement("div");

                            let btnTrailer = document.createElement("a");
                            btnTrailer.innerHTML = "Trailer";
                            btnTrailer.classList.add("btn", "btn-danger");
                            btnTrailer.href = element.trailerLink;


                            let moreInfo = document.createElement("button");
                            moreInfo.innerHTML = "more info";
                            moreInfo.classList.add("btn", "btn-success", "ms-2");

                            moreInfo.addEventListener("click", (e) => {
                                moreInfo.setAttribute("data-bs-toggle", "modal");
                                moreInfo.setAttribute("data-bs-target", "#exampleModal");
                            });
                            btnBox.append(btnTrailer, moreInfo);
                            cardBody.append(title, year, raiting, janr, btnBox);
                            // console.log(cardBody);
                            card.append(cardImgDiv, cardBody);
                            cardGroup.append(card)
                        }
                        ;
                    }

                }
            })
        })
}

// --Search input