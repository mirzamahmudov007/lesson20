// let arr = [1, 2, 3];


// Array.prototype.sum = function () {
//     let sum = 0;

//     for (let i = 0; i < this.length; i++) {
//         if (typeof this[i] === "number") {
//             sum += this[i];
//         } else {
//             return "Error";
//         }
//     }
//     return sum;
// }



// let arrStr = ["A", "B", "D", "C", "Z"]
// Array.prototype.sortStringAZ = function () {
//     let arr = [];
//     arr = this;
//     arr.sort();

//     return arr;
// }


// Array.prototype.sortStringZA = function () {
//     let arr = [];
//     arr = this;
//     arr.sort((a, b) => {
//         return b.localeCompare(a);
//     });

//     return arr;
// }

// console.log(arrStr.sortStringZA());

let arr = [1, 2, 3, 4, 5];
Array.prototype.yandex = function (innerF) {
    for (let i = 0; i < this.length; i++) {
        innerF(this[i], i, this);
    }
}

function innerF(item, index, array) {
    console.log(item, index, array);
}

arr.yandex((item, index, array) => {
    console.log(item);
});