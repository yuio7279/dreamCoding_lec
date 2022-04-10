'use strict';
let names = "hellos"
{
    var globalName = "gg";
    let name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(names);
console.log(globalName);

// 2. var (don't ever use this!)

// console(age)


// 3. Contants
// favor immutable data type always for a few reasons:
// security
// thread safety
// reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// 기초타입 single item: Number, string, boolean, null, undefined, 등등
// 오브젝트타입, box container
// function타입, first-class function? 함수도 변수에 할당이 가능하다는 의미


const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`size: ${size}, type: ${typeof size}`);

// number - speicla numeric values: Infinity, -Infinity
const infinity = 1 / 0; //infinity값이 출력
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2 ; //NaN 숫자가 아닙니다 출력

// bigInt  (fairly new, don't use it yet)
const bitInt = 12121312312312n; //뒤에 n만 붙이면 bigInt 타입이 된다.

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+ brendan;
const helloBob = `hi ${brendan}!`;

//boolean
//false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;

//null
let nothing = null; //null로 값이 할당 되어진 것

//undefined
let x = undefined; 
let x; //값이 할당 되어진게 아님

//symbol, create unique identifiers for objects
//같은 데이터값이지만 다르다 
//고유한 데이터식별을 위한 데이터타입이다
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

//string이 같다면 동일한 심볼을 만들고 싶은 경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbo1 === gSymbol2); //true

//symbol을 출력할땐 항상 string으로 변환하는 메소드 .decription을 붙여서 사용해야 한다.
console.log(symbol1.description);

// object, real-life object, data structure
//자바의 클래스개념, 객체
const ellie = {name : 'ellie', age: 20};
ellie.name // 'ellie'
ellie.age // 20


// 5. Dynamic typing: dynamically typed language
// 선언할때 어떤타입인지 선언하지 않고 런타임시 할달된 값에 따라 타입이 변경 될 수 있음을 의미
// 빠른 프로토타입으로 사용시 유용하다.
let text ='hello'; //string
text.charAt(0) //string 타입이기에 반환 가능
text = 1 ;   //number
text = '7' + 5; //string
text = '8' / '2'; //number
text.charAt(0) //현재 text는 number타입이므로 에러가 발생한다...

// >> 이런 문제로 인해 TypeScript가 나오게 되었다

