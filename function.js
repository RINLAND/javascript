'use strict';

// Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return;}
// one function === one thing 하나의 함수 한가지의 일만
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function printHome(){
    console.log('Home');
}
printHome();

function log(message){
    console.log(message);
}
// 파라미터에 전달된 message를 출력한다. 
log('Hello my name is yerin');
log('101');
log(1234);

// 2.Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj){
    obj.name = 'coder';
}

const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ //message, from 2가지파라미터
    console.log(`${message} by ${from}`);
}
showMessage('bye');
showMessage('Hi','ffxiv'); 

// 4.Rest parameters (added in ES6) 배열형태
function printAll(...args){
    for (let i = 0; i<args.length; i++ ){
        console.log(args[i]);
    }

    // for (const arg of args){
    //     console.log(arg);
    // }
}
printAll('dream', 'coding', 'ellie', 'one');


// 5.Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    // message 지엽변수
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage ='hello';
    }
    // console.log(chilidMessage) ; //error
}
printMessage();


// 6. Return a value
function sum (a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);
// console.log(result);

// 7.Early return, early exit

// e.g. bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// e.g. good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// 다른변수와 마찬가지로 변수에 할당가능
// can be assingned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1.Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3)); 

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
// 이름이 없는
const printYes = function(){
    console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// arrow function
// always anonymous 
// const simplePrint = function(){
//     console.log('simplePrint!');
// }

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// const add = function(a, b) {
//     return a+b;
// }

const simpleMultiply = (a, b) => a*b; 
// const simpleMultiply = function(a, b){
//     return a*b;
// }

// IIFE: Immediately Invoked Function Expression
// function hello(){
//     console.log('IIFE');
// }
// hello();

(function hello(){
    console.log('IIFE');
})();

// Fun quiz time
// function calculate (command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b){
    if (command === 'add'){
        return a+b;
    } else if ( command === 's ubtract'){
        return a-b;
    } else if ( command === 'divide'){
        return a/b;
    } else if ( command === 'multiply'){
        return a*b;
    } else if ( command ==='remainder'){

    }
}