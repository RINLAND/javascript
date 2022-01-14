const me = Symbol ("yerin");
console.log(me);

const clone = Symbol("yerin");
console.log(clone);

console.log(me == clone);
console.log(me === clone);

const office = {
    "TOM": "CEO",
    "Mark": "CTO",
    "Mark": "CIO",
};

for (person in office){
    console.log(person);
}
// undefined

const office = {
    [Symbol("Tom")]: "CEO",
    [Symbol("Mark")]: "CTO",
    [Symbol("Mark")]: "CIO",
};

for (person in office){
    console.log(person);
}


const office = {
    [Symbol("Tom")]: "CEO",
    [Symbol("Mark")]: "CTO",
    [Symbol("Mark")]: "CIO",    
};

const symbols = Object.getOwnPropertySymbols(office);
console.log(symbols);

const symbols = Object.getOwnPropertySymbols(office);
const value = symbols.map( symbol => office[symbol]);
console.log(value);