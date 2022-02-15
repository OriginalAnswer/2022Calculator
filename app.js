const dp = document.getElementById('display');
const dph = document.getElementById('displayhidden');

const btns = Array.from(document.getElementsByTagName('button'));
const nums = document.querySelectorAll("nums");

btns.map( b => {
    b.addEventListener('click', (e) => {
        console.log(e.target.value);
        // console.log('clicked!');console.log(e);console.log(e.target);console.log(e.target.innerText);
        switch(e.target.value){
            case 'AC':
                dp.innerText = '0';
                dph.innerText = '';
                break;
            case 'C':
                if(dp.innerText){dp.innerText = dp.innerText.slice(0,-1);}
                if(dph.innerText){dph.innerText = dph.innerText.slice(0,-1);}
                break;
            case '=':
                try{
                    dp.innerText = eval(dph.innerText);
                    dph.innerText = eval(dph.innerText);
                } catch {
                    dp.innerText = '';
                    dph.innerText = '';
                    alert('ERROR! 수식이 올바르지 않습니다.');
                }
                
                break;
            default:
                if(dp.innerText === '0'){
                    dp.innerText = '';
                    dp.innerText += e.target.innerText;
                    dph.innerText += e.target.value;
                } else {
                    dp.innerText += e.target.innerText;
                    dph.innerText += e.target.value;
                }
                
        }
    })
})


// 버튼의 벨류 값을 빈 배열에 푸쉬

// 푸쉬한 배열에 .맵

// 지우기 표시하기 결과내기


function darkmode(){
    const b = document.body;
    b.classList.toggle('darkmode')
}