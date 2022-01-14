const name = 'yerin';
const surname = 'kim';
const age = 21;
const nationality = 'Korean';


const person ={
    name: name,
    surname: surname,
    age: age,
    nationality: nationality,
};

console.log(person);

const person = {
    name,
    surname,
    age,
    nationality,
};
console.log(person);

const person = {
    name: "yerin",
    surname: "kim",
    greet: function(){
        console.log("Hello");
    },
};

person.greet();

const person = {
    name: "minji",
    surname: "kim",
    greet(){
        console.log("Hello");
    },
};

person.greet();

const person1 ={
    greet: () => console.log("Hello"),
};

person1.greet();


var name = "myname";
// 빈객체를 생성한다.
var person ={};
// 객체를 업데이트한다.
person[name] = "Alberto";
console.log(person.myname);


const name = "myname";
const person = {
    [name]: "Yerin",
};

