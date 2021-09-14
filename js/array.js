'use strict';

//Array🌟 


// 1.Declaration 
const arr1 = new Array();
const arr2 = [1, 2];


// 2.Index position
const fruits = ['🍎', '🍌', '🍋'];
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
// forEach 배열안에 있는 value들마다 내가 전달한 함수 출력

// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index);
// })
fruits.forEach((fruit, index, array) => console.log(fruit, index));


// 4.Addition, delete, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🥝');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// why? 기존의 데이터가 조정되어야한다. 배열의 길이가 길면 길수록 더 slow

// splice: remove an item by index positon
fruits.push('🥥', '🥝', '🍑');
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, '🍒', '🍉'); // 지우고나서 원하는 데이터도 넣을수있다.
console.log(fruits);
//fruits.splice(1); // 1번부터 다 지운다.

// combine two arrays
const fruits2 = ['🍐', '🍈'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5.Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍑'));
console.log(fruits.indexOf('🍈')); //해당하는값이 없을때 -1 출력

// includes
console.log(fruits.includes('🍑'));
console.log(fruits.includes('🍈'));

// lastIndexOf
console.clear();
fruits.push('🍒');
console.log(fruits);
console.log(fruits.indexOf('🍒'));
console.log(fruits.lastIndexOf('🍒'));


// HomwWork -> array의 api들 알기