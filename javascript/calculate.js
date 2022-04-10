'use strict'
const add = (a,b) => {return a+b};
const sub = (a,b) => {return a-b};
const div = (a,b) => {return a/b};
const mul = (a,b) => {return a*b};
const rem = (a,b) => {return a%b};
const calculate = (op, a,b) => 
{
    if(op === 'add')
        return add(a,b);
    else if(op === 'substract')
        return sub(a,b);
    else if(op === 'divide')
        return div(a,b);
    else if(op === 'multuply')
        return mul(a,b);
    else if(op === 'remainder')
        return rem(a,b);
    else return 0;
}

let answer = calculate('remainder','1','3');
if(answer === NaN)
    console.log('입력된 값이 숫자가 아닙니다..');
else if(answer === Infinity || answer === -Infinity)
    console.log('0으로 나눌 수 없습니다.');
else if(answer === 0)
    console.log('잘못된 수식입니다.');
else console.log(answer);

//스위치로 만드는 계산기
function calculate_(command, a, b){
    switch (command){
        case 'add':
            return a+b;
        case 'sub':
            return a-b;
        case 'mul':
            return a*b;
        case 'div':
            return a/b;
        case 'rem':
            return a%b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate_('add',2,3));