const score = 400
console.log(score); // out = 400

const balance = new Number(1000)
console.log(balance); // out = [Number:1000]

console.log(balance.toString()); // out = 1000
console.log(balance.toFixed(2)); // out = 1000.00

const otherNum = 23.8966
console.log(otherNum.toPrecision(3)) // out = 23.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // out = 1,000,000

// ++++++++++++++++ Maths ++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // out = 4
console.log(Math.round(4.3)); // out = 4
console.log(Math.ceil(4.3)); // out = 5 yani upar
console.log(Math.floor(4.9)); // out = 4 yani niche
console.log(Math.min(4,3,6,8)); // out = 3 
console.log(Math.max(4,3,6,8)); // out = 8

console.log(Math.random())// out = 0 to 1 ke bich me
console.log((Math.random()*10)+1) // out = 1 to 10


