function cal(){
    let usd = document.querySelector("input");
    let malumot = usd.value;

    let pElement = document.createElement("p");
    pElement.classList.add("pp");
    let select= document.querySelector("#select");
    let selectVal = select.value;

    switch(selectVal){
        case "Dollor":{
            malumot = malumot * 12356.76;            
        }
        case "Rubl":{
            malumot = malumot * 137.65;
        }
        case "Euro":{
            malumot = malumot * 13423.77;
        }
    }
    pElement.innerHTML = malumot + " So'm";

    let result = document.querySelector(".result");
    result.append(pElement);

}


