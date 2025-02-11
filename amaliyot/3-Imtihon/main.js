// 1-Masala

// function kattaBoshHarf(string) {
//     let sozlar = string.split(' ');

//     for (let i = 0; i < sozlar.length; i++) {
//         sozlar[i] = sozlar[i].charAt(0).toUpperCase() + sozlar[i].slice(1);
//     }

//     return sozlar.join(' ');
// }

// console.log(kattaBoshHarf("salom bu men"));

// 2-Masala

// function isEquals(str1 , str2){
//     let str1Arr = str1.split(" ");
//     let str2Arr = str2.split(" ");
//    str1Arr.sort();
//     str2Arr.sort();
//     if(str1Arr.join("") === str2Arr.join("")){
//         return "true";
//     }
//     else{
//         return "false";
//     }
// }

// console.log(isEquals("soff study academy", "academy study soff"));



// 1-Topshiriq

// let Summ = 0;

// function arrElementPlus(arr){
//    for (const el of arr) {
//      Summ+=el;
//    }
//    console.log(Summ);
// }

// arrElementPlus([1,3,5,9]);



// 2- Topshiriq


// function longWord(str){
//     let arr = str.split(" ");
//     console.log(arr);
//     let lengthCount = 0;
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         // arr[i].toString().length;
//         if (arr[i].toString().length > lengthCount) {
//             lengthCount = arr[i].toString().length;
//             result = arr[i].toString();
//         }
//     }
//     return result;
// }
// console.log("Eng uzun so'z: " + longWord("Salom bu Men"));



// 3-Topshiriq


// let newArr =[];

// function normalizeNumbers(numbers){
//     numbers.forEach(element => {
//         newArr.push(Math.round(Math.abs(element)));
//     });

//     return newArr;
// }

// console.log(normalizeNumbers([3.02,-3.65,5,-9]));


let body = document.querySelector("body");
let div = document.querySelector("div");
body.addEventListener("click" , (e)=>{
    let Y = e.screenY - e.pageY;
    let X = e.screenX - e.pageX;
    console.log(`${X}`);
    body.style.paddingTop = `${Y}`+"px";
    body.style.paddingLeft = `${X}` + "px";
})