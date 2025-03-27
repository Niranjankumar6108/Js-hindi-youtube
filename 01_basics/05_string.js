const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value"); // out=hitesh50 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh')

console.log(gameName[0]);

console.log(gameName.length);// out = 6
console.log(gameName.toUpperCase());//out = ITESH
console.log(gameName.charAt(3));//out = e
console.log(gameName.indexOf('e'));//out = 3

const newString = gameName.substring(1,4)
console.log(newString); // out = ite

const anotherString = gameName.slice(-6,2)
console.log(anotherString); // out = hse

const newStringOne = "   hitesh   "
console.log(newStringOne) // out =    hitesh   ,
console.log(newStringOne.trim()) // out = hitesh,

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))// out = https://hitesh.com/hitesh-20choudhary

console.log(url.includes('hitesh')) // out = true

const username = niran-kumar-yadav
console.log(username.split('-')); // out = ['niran,;kumar,'yadav]