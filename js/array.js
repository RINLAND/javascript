'use strict';

//Arrayπ 


// 1.Declaration 
const arr1 = new Array();
const arr2 = [1, 2];


// 2.Index position
const fruits = ['π', 'π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// print all fruits

// mycode
function printFruit() {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
console.clear();
printFruit();

// a. for -made by ellie
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of -made by ellie
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// forEach λ°°μ΄μμ μλ valueλ€λ§λ€ λ΄κ° μ λ¬ν ν¨μ μΆλ ₯

// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index);
// })
fruits.forEach((fruit, index, array) => console.log(fruit, index));


// 4.Addition, delete, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π', 'π₯');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// why? κΈ°μ‘΄μ λ°μ΄ν°κ° μ‘°μ λμ΄μΌνλ€. λ°°μ΄μ κΈΈμ΄κ° κΈΈλ©΄ κΈΈμλ‘ λ slow

// splice: remove an item by index positon
fruits.push('π₯₯', 'π₯', 'π');
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, 'π', 'π'); // μ§μ°κ³ λμ μνλ λ°μ΄ν°λ λ£μμμλ€.
console.log(fruits);
//fruits.splice(1); // 1λ²λΆν° λ€ μ§μ΄λ€.

// combine two arrays
const fruits2 = ['π', 'π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5.Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π')); //ν΄λΉνλκ°μ΄ μμλ -1 μΆλ ₯

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π'));

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));


// HomwWork -> arrayμ apiλ€ μκΈ°