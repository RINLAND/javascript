// 1. Use Strict
// added in ES 5
// use this for Valina Javascript.
'use strict';


//2.variable(변수) , rw(read/write)
// let (added in ES6)
let globalName = 'global name';
// 최소한으로사용
{
    let name = 'yerin';
    console.log(name);
    name = 'one';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!) 값 선언하기 전에 사용가능
// var hoisting (move declaration from bottom to top)
// has no block scope (블럭을 무시함)
{
    age=4;
    var age;
}

console.log(age);

// 3.Contant, r (read only )
// use const whenever possible.
// only use let if variable needs to change.

// 값을 한 번 할당하면 바뀌지 않는다.
// favor immutable data type always for a few reasons;
// - securityx
// - thread safety
// - reduce human mistakes 
// Mutable let, Immutable const
const daysInWeek = 7;
const maxNumber = 5;

// Note! 
// Immutable data types: primitive types, frozen objects(i,e. object.freeze()) 변경불가
// Mutable data types: all objects by default are mutable in JS 변경가능
// favor imnnutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes


// 4.Variable types
// primitive, single item: number, string, boolean, null, undifiden, symbol 
// object, box container, ref가 저장
// function, first-clss function-> function 변수에 할당가능

const count=15; // integer
const size = 15.3 ; // decimal number
console.log('value: ${count}');

// bigInt( fairly new, don't use it yet) 크롬, 파이어폭스만 use
const bigInt = 1234567878945153548789n;

// string
const char ='c';
const brendan ='brendan';
const greeting = 'hello' + brendan;
// console.log('value: ${greeting}, type: ${type of greeting}');    안되는 이유 찾기

// boolean
// false : 0, null, undefined, NaN, ''
// true : any ather value

const canRead = true;
const test = 3 <1 ; //false
console.log();

// null
// null로 값이 할당
let no
// undefined
// 선언은 되었지만 값이 지정되어있지x

// symbol, create unique identifiers for objects 고유한 식별자를 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //falses
const gSymbol = Symbol.for('id');
const gSymbol = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log('value: ${symbol1}, type: ${typeof symbol1}');

// 5. Dynamic typing: dynamically typed language
let text ='hello';
console.log('value: ${text}')

// object, real-life object, data structure

