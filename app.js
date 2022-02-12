const dp = document.getElementById('display');

const btns = Array.from(document.getElementsByTagName('button'));
const nums = document.querySelectorAll("nums");
const symb = document.querySelectorAll("symb");

const clearall = document.querySelector('clearall');
const plus = document.querySelector('plus');
const mins = document.querySelector('mins');
const divd = document.querySelector('divd');
const times = document.querySelector('times');
const equals = document.querySelector('equals');


btns.map( b => {
    b.addEventListener('click', (e) => {
        // console.log('clicked!');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            default:
                dp.innerText += e.target.innerText;
        }
    })
})