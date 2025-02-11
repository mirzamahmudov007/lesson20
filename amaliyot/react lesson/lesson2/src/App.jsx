import React, { useState } from 'react';

let back = [
    {
        uz: "salom",
        ru: "privet",
        eng: "hello"
    },
    {
        uz: "xayr",
        ru: "paka",
        eng: "bye"
    }
]

const App = () => {


    let [soz, setSoz] = useState("");

    function lang(e) {
        return e.target.value;
    }


    function selectVal() {
        let soz = document.querySelector("input").value;
        let sel = document.querySelector("select").value;
        if (sel === "eng") {
            back.map(val => {
                if (val.uz === soz) {
                    soz = val.eng;
                    setSoz(soz);
                }
            })
        }
        else if (sel === "ru") {
            back.map(val => {
                if (val.uz === soz) {
                    soz = val.ru;
                    setSoz(soz);
                }
            })
        }
        else if (sel === "uzb") {
            back.map(val => {
                if (val.uz === soz) {
                    soz = val.uz;
                    setSoz(soz);
                }
            })
        }

    }
    return (
        <div className='d-flex row ms-5 mt-5 w-25'>
            <input className='form-control  w-75' type='text' placeholder='soz kiriting' onChange={(e) => lang(e)} />
            <select className='form-select form-control-sm  w-25 ' onChange={() => selectVal()}>
                <option value={"eng"}>Eng</option>
                <option value={"ru"}>Ru</option>
                <option value={"uzb"} selected>Uzb</option>
            </select>
            <h1>{soz}</h1>
        </div>
    );
};

export default App;
