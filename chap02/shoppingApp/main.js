'use strict'

const item = document.querySelector('.insert-item');
item.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        if(item.value===''){
            console.log('내용입력');
        }
        else if(item.value.length > 15){
            console.log('15자 이내로 입력하세요.');
        }
        else{
            addItem(item.value);
            item.value='';
        }
    }
});

const btn = document.querySelector('.insert-btn');
btn.addEventListener('click',(e)=>{
    if(item.value===''){
        console.log('내용입력');
    }
    else if(item.value.length > 15){
        console.log('15자 이내로 입력하세요.');
    }
    else{
        addItem(item.value);
        item.value='';
    }
});


function addItem(value){
    const span = document.createElement('span');
    span.setAttribute('class','item');
    
    span.innerHTML = value;

    const trash_icon = document.createElement('i')
    trash_icon.setAttribute('class','fa-solid fa-trash-can');
    trash_icon.addEventListener('click',removeItem);
    
    const item_box = document.createElement('div');
    item_box.setAttribute('class','item-box');
    item_box.style.height = 30+'px';
    item_box.appendChild(span);
    item_box.appendChild(trash_icon);

    const middle_container = document.querySelector('.middle-container');
    middle_container.appendChild(item_box)
    console.log('추가완료');
}



function removeItem(){
    
    const item_box = document.querySelector('.item-box');
    item_box.remove();
    console.log('삭제완료');
}