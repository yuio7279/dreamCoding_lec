'use strict'

// //Object-oriendted progamming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1.Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }


//methods
speak(){
    console.log(`${this.name}:hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//Getter and Setters

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age);

//Call stack 초과 에러?
//age를 호출 시 set를 무한으로 호출하기때문에 수정해줘야 한다

//3. Fields (public, private)
//Too soon!
class Experiment {
    publicField = 2; //public
    #privateField = 0; //#을 붙이면 private
}
const experiment = new Experiment();
//console.log(experiment.privateField)

//4. Static properties and methods
//Too soon
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher);
console.log(Article.publisher);

//5. Inheritance 상속
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        console.log("세모");
    }
    getArea(){
        return (this.width * this.height) /2;
    }

    toString(){
        return `Trangle: color: ${this.color}`;
    }
}


const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//6. CLass checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

//javascript mdn reference page 방문해보기