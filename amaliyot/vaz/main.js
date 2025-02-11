
let date = new Date();
let week = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
function moment() {
    return {
        format: function (str) {
            if (str === "LT") {
                console.log(date.getHours() + ":" + date.getMinutes());
            } else if (str === 'LTS') {
                console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
            } else if (str === 'L') {
                console.log(date.toLocaleDateString().replaceAll(".", "/"));
            } else if (str === 'l') {
                console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            } else if (str === 'LL') {
                console.log(date.getDay() + " " + date.toLocaleString('ENG', { month: 'long' }) + " " + date.getFullYear());
            } else if (str === 'll') {
                console.log(date.getDay() + " " + date.toLocaleString('ENG', { month: 'long' }).substring(0, 3) + " " + date.getFullYear());
            } else if (str === 'LLL') {
                console.log(date.getDay() + " " + date.toLocaleString('ENG', { month: 'long' }) + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getUTCMinutes());
            } else if (str === 'lll') {
                console.log(date.getDay() + " " + date.toLocaleString('ENG', { month: 'long' }).substring(0, 3) + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getUTCMinutes());
            } else if (str === 'LLLL') {
                console.log(date.getDay() + " " + date.toLocaleString('ENG', { month: 'long' }) + " " + date.getFullYear() + ", " + week[date.getUTCDay() - 1] + " " + date.getHours() + ":" + date.getMinutes());
            } else if (str === 'llll') {
                console.log(date.getDay() + " " + date.toLocaleString('ENG', { month: 'long' }).substring(0, 3) + " " + date.getFullYear() + ", " + week[date.getUTCDay() - 1].toString().substring(0, 3) + " " + date.getHours() + ":" + date.getMinutes());
            }
        }
    }
}

moment().format("l");