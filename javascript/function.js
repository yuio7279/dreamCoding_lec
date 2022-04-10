'use strict'
// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. function declaration
// function name(param1, param2)  {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// ellie.age. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() //void
{
    console.log('Hello');
}
printHello();

function log(message) { //void, param 
    console.log(message);
}
log('Hello@');
log(1234);

// //function log(message: string): number { //typescript 맛보기
//     console.log(message);               //return : number, param
//     return 0;
// }

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name ='coder';
}

const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('HI!');

// 4. Rest parameters
function printAll(...args){
    for (let i=0; i< args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=>console.log(arg));
}

printAll('dream', 'coding','ellie');

// 5.Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother(){
        let childMessage = 'hello';
    }
    // console.log(childMessage); 사용 불가.
}
//밖에서는 안이 보이지 않고,,
//안에서만 밖을 볼 수 있다.

printMessage();

// 6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3

// 7. Early return, early exit
// 조건이 맞지 않을 때에 빨리 벗어나게끔 함수를 작성

// First-class function

// 1. Function expression
// a function declaration can be called earlier than it is defined, (hoisted)
// a function expression is created when the execition reaches it.

const print = function(){ //anonymous function 익명함수
    console.log('print');
}
const printAgain = print;
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
// 조건에 맞을때 호출되는 콜백함수
function randomQuiz(answer, printYes, printNo){     //매개변수가 함수
    if (answer === 'love you')
    {
        printYes();
    } 
    else 
    {
        printNo();
    }
}
 //anonymous function
const printYes = function (){console.log('yes!');};


//named function
//better debugging in debuggers's stack traces
//recursions .. 함수 안에서 본인함수 호출
const printNo = function print(){console.log('no!');}; 
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

//Arrow function
const simplePrint = () => console.log('simplePrint!'); //Arrow function, Lambda같은..
const add = (a,b) => {
    a * b
};


//IIFE: Immediately Invoked Function Expression
//함수 작성하자마자 바로 호출
(function hello() {
    console.log('IIFE');
})(); 


