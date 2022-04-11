'use strict'
//설계 우선
//1 : input에서의 type기능
//2 : +버튼 클릭시 or Enter키 입력시 item을 등록하는 기능
//3 : 스크롤링 리스트에 표기가 되는 기능
//4 : trashIcon 클릭시 item이 삭제가 되는 기능

const items = document.querySelector('.items');
const input = document.querySelector('.input__text');
const addBtn = document.querySelector('.input__btn');

//function 정의시 on~으로 시작한다
function onAdd(){
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    console.log(text);
    if(text === ''){
        input.focus();
        return;
    }


    //2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    
    

    //3. items 컨테이너 안에 새로 만든 아이템을 추가
    items.appendChild(item);


    //4. input을 초기화한다.
    input.value='';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');

    const item = document.createElement('div');
    item.setAttribute('class','item__box');

    const name = document.createElement('span');
    name.setAttribute('class','item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item__delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    });


    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

addBtn.addEventListener('click',()=>{
    onAdd();
});

input.addEventListener('keypress',(e)=>{
    if(e.key ==='Enter')
        onAdd();
    else
        return;
});