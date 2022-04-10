'use strict'

let target = document.querySelector('.target');
let bTop = document.querySelector('.borderTop');
let bLeft = document.querySelector('.borderLeft');
let msg = document.querySelector('.msg');

// let targetRect = target.getBoundingClientRect();
// let targetHW = targetRect.width / 2;
// let targetHH = targetRect.height / 2;

//      간혹 defer 설정시 target의 x,y좌표가 로딩이 안될 수 있다..
//      defer은 document content가 모두 load되기 전에 호출이 되기때문
//      모든 리소스, 자원이 준비된 상태는 'load' 상태

addEventListener('load',(e)=>{ 
    let targetRect = target.getBoundingClientRect();
    let targetHW = targetRect.width / 2;
    let targetHH = targetRect.height / 2;

    document.addEventListener("mousemove",(e)=>{
        target.style.transform = `translate(${e.clientX - targetHW}px,${e.clientY - targetHH}px)`;
        
        bLeft.style.transform = `translateX(${e.clientX}px)`;
        bTop.style.transform = `translateY(${e.clientY}px)`;
    
        msg.style.transform = `translate(${e.clientX+30}px,${e.clientY+10}px)`;
        
        msg.innerHTML= `${e.clientX}px, ${e.clientY}px`;
    });
});




