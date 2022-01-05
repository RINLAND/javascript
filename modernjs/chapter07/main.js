// ES6 이전 배열의 각 원소에 대해 반복할때
var fruits = ['apple', 'banana', 'orange'];
for( var i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// ES6
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits){
    console.log(fruit);
}

const car = {
    maker : "BMW",
    color : "red",
    year : "2010",
};

for (const prop of Object.keys(car)){
    const value = car[prop];
    console.log(prop, value);
}


const car = {
    maker : "BMW",
    color : "red",
    year : "2010",
};

for (const prop in car ){
    console.log(prop, car[prop]);
}

let list = [4, 5, 6];

//for..in 은 키의 목록을 반환한다.
for(let i in list){
    console.log(i);
}

//for..of 는 키의 값을 반환한다.
for(let i of list){
    console.log(i);
}