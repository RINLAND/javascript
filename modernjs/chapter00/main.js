'use strict';

// 변수선언
var username = "yerin";
let username = "yerin";
const username = "yerin";

let user__name = "kimyerin";
console.log(user__name);

// 객체
const car = {
    wheels: 4,
    color: "blue",
    drive : function(){
        console.log("wroom wroom");
    }
};

// 빈객체생성하기

const car = new Object();
const car = {}; // 객체리터럴

// 비어있는 객체에 새속성 추가하기 
// 점표기법
car.color = "yellow";
console.log(car);

// 대괄호 표기법
const car = {
    wheels : 4,
    color : "red",
};

console.log(car.wheels);
console.log(car['color']);

const cars = {
    ferrari : "california",
    porsche : "911",
    bugatti: "veyron",
}

// 사용자 입력
const key = "ferrari";
console.log(cars.key);
// undefined
console.log(car['key']);
// undefined
console.log(cars[key]);

const fruit__basket = ['apple', 'banana', 'orange'];
console.log(fruit__basket[0]);
//apple
console.log(fruit__basket[2]);
// orange




