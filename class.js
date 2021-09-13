'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance
// 문법상으로 편리함 제공

// 1.Class declarartions 클래스 선언
class Person {
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20); //새로운 object
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2.Getter and setters 
// 누가 잘못해도 방어적으로 할수있게해준다~
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if( value <0 ){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job' -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 이용하는 사람이 많이 없다.
// 
class Experiment{
    publicField = 2;
    #privateField = 0;
    // #기호 private에만사용 클래스 외부에서 변경, 읽기 불가 
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); 
// undefined 값으로 나옴

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'ff xiv';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();


// 5.Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        // 부모의 draw도 실행하고 아래의 draw method도 호출함
        console.log('ㅁ');
    }
    getArea(){
        return (this.width * this.height)/ 2;
        // overriding
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6.Class checking: instanceOf
// 21:21부터
console.log(rectangle instanceof Rectangle);
console.log();
console.log();
console.log();
console.log();
console.log();