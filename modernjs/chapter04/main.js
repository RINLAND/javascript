
// ES5
var name = "yerin";
var greeting = 'Hello my name is' + name;
console.log(greeting);
// ES6
let name = "minji";
const greeting =`Hello my name is ${name}`;
console.log(greeting);

// ES5
var a = 1;
var b = 10;
console.log( '1*10 is ' + (a*b));
// 1*10 is 10

// ES6
var a = 1;
var b = 10;
console.log(`1*10 is ${a*b}`);
// 1*10 is 10



// ES6

const content = `hello,
my name is yerin
how are you?`;


const people =[{
        name : 'yerin',
        age : 25,
    }, {
        name : 'subin',
        age: 25,
    },{
        name : 'jieun',
        age : 26,
    }
];

const markup = `
<ul>
    ${people.map( person => `<li> ${person.name}</li>`)}
</ul>`;

console.log(markup);

const isDiscounted = false;

function getPrice(){
    console.log(isDiscounted ? "$10" : "$20");
}
getPrice();

const artist = {
    name : "Bon Jovi",
    age : 56,
};

const text = `
    <div>
        <p> ${artist.name} is ${artist.age} years old ${artist.age} years old ${artist.song ? `and 
        wrote the song ${artist.song}` :''}
        </p>
    <div>
`;

const artist = {
    name : 'Trent Reznor',
    age : 53,
    song : 'Hurt',
};

const groceries = {
    meat : "pork chop",
    veggle : "salad",
    fruit : "apple",
    others : [ 'mushrooms', 'instant noodels', 'instant soup'],
};

function groceryList(others){
    return `
        <p>
            ${others.map ( other => `<span>${other}</span>`).join ('\n')}
        </p>
    `;
}

const markup = `
    <div>
        <p>${groceries.meat}</p>
        <p>${groceries.veggie}</p>
        <p>${groceries.fruit}</p>
        <p>${groceryList(groceries.others)}</p>
    <div>
`;

let person = "yerin";
let age = 25;

function myTag(strings, personName, personAge){
    let str = strings[1];
    let ageStr;

    personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}`;
console.log(sentence);

// 4.1 템플릿 리터럴을 활용하여 다양한 변수를 결합하고 원하는 출력을 얻도록 코드를 구현해보자
let a ="Hello, ";
let b ="is"