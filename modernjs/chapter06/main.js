const person = {
    name: "yerin",
    last: "kim",
    links:{
        social: {
            twitter: "주소가 없습니다.",
        },
        website: "https://rinland.notion.site/front-end-study-94854ffe1d6145fbbd12aec757504189",
    },
};

const {twitter} = person.links.social;

const {twitter: facebook} = person.links.social;
// person.links.social.twitter 프로퍼티를 찾아 facebook이라는 변수로 명명함
console.log(facebook);
console.log(twitter);

const person = ["yerin", "kim", 20];
const [name, surname, age] = person;

const person = ["yerin", "kim", 20];
// age(20)은 필요하지 않으므로 뺀다.
const [name, surname] = person;
// 20은 어떤 변수에도 할당되지 않는다.

const person = ["yerin", "kim", "pizza", "ice-cream"];
// 레스트 연산자를 사용하여 나머지 값 전체를 얻는다.
const [name, surname, ...food] = person;
console.log(food);