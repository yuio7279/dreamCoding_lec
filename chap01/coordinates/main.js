'use strict'

let target = document.querySelector('.target');
let bTop = document.querySelector('.borderTop');
let bLeft = document.querySelector('.borderLeft');
let msg = document.querySelector('.msg');

document.addEventListener("mousemove",(e)=>{
    target.style.left = e.clientX+'px';
        target.style.top = e.clientY+'px';
});
document.addEventListener("mousemove",(e)=>{
    // bTop.style.left = e.clientX+'px';
        bTop.style.top = e.clientY+'px';
});
document.addEventListener("mousemove",(e)=>{
    bLeft.style.left = e.clientX+'px';
        // bLeft.style.top = e.clientY+'px';
});
document.addEventListener("mousemove",(e)=>{
    msg.style.left = e.clientX+20+'px';
        msg.style.top = e.clientY+20+'px';
    msg.innerHTML= `${e.clientX}px, ${e.clientY}px`;
});

