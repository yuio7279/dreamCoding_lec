'use strict'

//Objects
// one of the  JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScipt are instances of Object

// const name = 'ellie';
// const age = 4;
// object = {key : value};

//1. Literals property
const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

function prints(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
prints(ellie);

//동적 언어 (바인딩?)
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
console.log(ellie.name);
console.log(ellie['name']); //Computed... only String Type
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key);
}
printValue(ellie,'name'); //undefined


function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie,'name'); 
printValue(ellie, 'age');

//3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
const person5 = new Person('ellie', 25);


function makePerson(name, age){
    return {
        name, age,
    };
}

//4. Constuctor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

//5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

//6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie){ //왜 안될까
    console.log(key);
}
console.log('d');
//for (value of iterable)
//arrayList iterable
const array = [1,2,3,4]; 
for (let value of array){ //왜 안될까2
    console.log(value);
}


//7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name:'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); //user2를 수정했을 떄 user도 ㅏㅂ뀐다 ref 방향이 같이때문

//old way
const user3 = {};
// for (key in user){
//     user3[key] = user[key];
// }
// console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({},fruit1, fruit2); //뒤에 인자로 덮어씌운다
console.log(mixed.color); //blue
console.log(mixed.size); //big


