// 1.String concatenation
console.log('my'+ 'cat');
console.log('1', + 2);
console.log(`string literals : 1 + 2 = ${ 1+2 }`);   // 변수값계산

//  \n 다음줄 \t tap키

// 2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation 2의 3승

// 3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; 
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter +1;

console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// 왜안먹을까? 


// 4.Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comprison operators 비교하는 오퍼레이터
console.log( 10 < 6); // less than
console.log( 10 <= 6); // less than or equal
console.log( 10 > 6); //  greater than
console.log( 10>= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 3개중에 하나라도 true가 되면 true로 계산됨 
// or 연산자는 처음으로 true가 나오면 멈춘다.
// simple value를 제일 앞에 두기


// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); //heavy한 오퍼레이션 일수록 제일 뒤에둬야함
// 3개가 다 true여야 true 리턴
// often used to compress long if-statement
// nullableObject && nullableObject.something

// if (nullableObject != null ){
//     nullableObject.something;
// }

function check(){
    for (let i = 0; i < 10; i++){
        // wasting time
        console.log('🥰 ');
    }
    return true;
}

//  !(not)

console.log(!value1);

// 7. Equality
const stringFive ='5';
const numberFive =5;

// == loose equlity, with type conversation 타입을 변경해서 검사한다
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ===  strict equality, no type conversation 타입을 신경씀
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name : 'ellie' };
const ellie2 = {name : 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); 
// ellie1과 ellie2는 각각 다른 ref가 저장되어있어서 f다.
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);


// equality - puzzler
console.log( 0 == false); // t
console.log( 0 === false); // f
console.log('' == false); // t
console.log ('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log(`Welcome, Ellie!`);
}else if (name === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unkwnon');
}


// 9. Ternary operator : ?
// condition ?  value1 : value2;
// true : false
console.log ( name === 'ellie' ? 'yes' : 'no' );

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ='IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;    
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while ( i > 0 ){
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while : ${i}`);
    i--;
} while (i >0);


// for loop, for(begin; condition; step)
// begin은 한번만 
for ( i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2 ){
    // inline varaiable declaration
    console.log(`inline variable for : ${i}`);
}

// Q1, iterate from 0 to 10 and print onley even numbers ( use continue )
for (let i = 0; i <11; i++){
    if( i % 2 !== 0){
        continue;
    }
    console.log(`${i}`);
}
// Q2, iterate from 0 to 10 and print numbers until reaching 8 ( use break )

for ( let i =0; i< 11; i++){
    if ( i > 8){
        
        break;
    }
    console.log(`q2. ${i}`);
}