// 'use strict';
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode

// Objects
// one of the JavaScript's data types.
// a collecion of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object  = { key : value}; object는 key와 value의 집합체이다.

// 1.literals and properties
// object 생성하는법
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; //object로 관리
// key: name, value: ellie
print(ellie);

// add기능
ellie.hasJob = true; //동적, 가능하면 피해서 코딩하기
console.log(ellie.hasJob);

// delete기능
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2.Computed properties
// Key should be always string
// 실시간으로 원하는 키 값을 받아오고싶을때사용
console.log(ellie.name);
console.log(ellie['name']); //동일한결과가산출됨
ellie['hasJob']= true;
console.log(ellie.hasJob);

//e.g.
function printValue(obj, key){
    // console.log(obj, key);
    console.log(obj[key]);
}
printValue (ellie, 'name');
printValue (ellie, 'age');


// 3.Property value shorthand
const person1 = {name: 'bob', age: 2 };
const person2 = {name: 'steve', age: 3 };
const person3 = {name: 'dave', age: 4 };
// const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 22);
console.log(person4);
function makePerson(name, age){
    return{
        name: name,
        age: age
        // name,
        // age
    };
}


// 4.Constuctor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5.in operator: property existence check (key in obj)
// 키가있는지 없는지 확인
console.log('name' in ellie); 
console.log('age' in ellie); 
console.log('random' in ellie);
console.log(ellie.random);


// 6.for..in vs for ..of
// for(key in obj)
console.clear();
for (key in ellie){
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array){
    console.log(value);
}


//7.Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...]) 
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder'; //user2.name을 변경했는데 user.name도 coder로 변경됨
console.log(user);

// old way
const user3 = {};
for (key in user){ //user안에 있는 key 빙글빙글
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user); // (복사하고자하는곳, 복사할대상)
console.log(user4);
const user5 = Object.assign({}, user);
console.log(user5);

// another example 
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에서 앞으로 덮어씌움
console.log(mixed.color);
console.log(mixed.size);