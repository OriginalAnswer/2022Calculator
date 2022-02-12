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
        // console.log('clicked!');console.log(e);console.log(e.target);console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'AC':
                dp.innerText = '';
                break;
            case 'C':
                if(dp.innerText){dp.innerText = dp.innerText.slice(0,-1);}
                break;
            case '=':
                try{
                    dp.innerText = eval(dp.innerText);
                } catch {
                    dp.innerText = '';
                    alert('ERROR!');
                }
                
                break;
            default:
                if(dp.innerText === '0'){
                    dp.innerText = '';
                    dp.innerText += e.target.innerText;
                } else {
                    dp.innerText += e.target.innerText;
                }
                
        }
    })
})