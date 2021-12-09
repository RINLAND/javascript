for(var i = 0; i < 10; i++){
    var leak = "I believe i can fly";
}

console.log(leak);
// I believe i can fly

function myLife(){
    var hello = "hello world";
    console.log(hello);
}

myLife();
// hello world

console.log(hello);
// Uncaught ReferenceError: hello is not defined


// let 사용의 예

let x = "hello";

if ( x === "hello"){
    let x = "hello world";
    console.log(x);
    // hello world
}

console.log(x);
// hello

// var 사용의 예

var y = "hello";

if( y === "hello"){
    var y ="hello world";
    console.log(y);
    // hello world
}

console.log(y);
// hello world

const constant = "I wanna go home";
constant = "I love you";
// Uncaught TypeError: Assignment to constant variable.


const person = {
    name : "yerin",
    age: 25,
};

person.age = 27;
console.log(person.age);
// 27

Object.freeze(person);


// TDZ

console.log(i);
var i = "I am a variable";
// undefined

console.log(j);
let j ="I am a let"
// Uncaught ReferenceError: j is not defined
