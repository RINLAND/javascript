// 일반적으로 함수를 선언하는 법
const greeting = function(name){
    return "hello"+ name;
};

// 화살표 함수
var greeting = (name) => {
    return 'hello ${name}';
}
// 1.매개변수가 하나만 있으면 괄호 생략 하고 사용 가능
var greeting = name =>{
    return 'hello ${name}';
}

// 2.매개변수가 하나도 없을때
var greeting =() => {
    return 'hello';
}
const greeting = name => 'hello ${name)';

const oldFunction = function(name) {
    return  "hello " + name ;
};

const arrowFunction = name => 'hello ${name}';

const greeting = name => 'hello ${name}';
greeting("Tom");

const person1 = {
    age: 10,
    grow: function(){
        this.age ++;
        console.log(this.age);
    },
};

person1.grow();

const person2 ={
    age : 10,
    grow: ()=>{
        // 오류: 여기서 this는 window 객체를 가르킴
        this.age++;
        console.log(this.age);
    },
};

person2.grow();


arg => {console.log(arg)};
