'use strict'

//Array 
//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length -1]);
console.clear();


//3. Looping over an array
//for of
for (let fruit of fruits)
{
    console.log(fruit);
}

//for
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

//forEach
fruits.forEach(fruit => console.log(fruit));

//4. Addtion, deletion, copy
//push: add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
//앞으로 추가
fruits.unshift('딸기','바나나');

//shift: remove an item from the benigging
//앞으로 삭제
fruits.shift();
console.log(fruits);

//note !! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.push('딸기','복숭아','레몬');
console.log(fruits);
fruits.splice(1);           //1번 인덱스부터 나옴
fruits.splice(1,1);             //first인덱스 ~ second인덱스-1번까지 (사이값)
fruits.splice(1,1,'사과','수박'); //frist인덱스 ~ second인덱스-1번 (사이값에 추가하기)
console.log(fruits);

//combine two arrays
const fruits2 = ['참외','고구마'];
const newFruits = fruits.concat(fruits2);   //결합하기 concat
console.log(newFruits);


//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('코코넛'));
//includes
console.log(fruits.includes('수박')); //boolean


//LastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));

//배열이 선언된 곳으로 이동하여 함수들을 한번씩 읽어보기