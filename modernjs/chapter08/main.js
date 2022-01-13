const fruits = Array.from(document.querySelectorAll(".fruits p"));
console.log(fruits);
const fruitsName = fruits.map(fruit => fruit.textContent);
console.log(fruitsName);