// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods 

myArr.push(6) // out = [0,1,2,3,4,5,6]
myArr.push(7) // out = [0,1,2,3,4,5,6,7]
myArr.pop()   // out = [0,1,2,3,4,5,6]
console.log(myArr);

console.log(myArr.includes(9)); // out = false
console.log(myArr.indexOf(9)); // out = -1
console.log(myArr.indexOf(4)); // out = 4
const newArr = myArr.join()
console.log(myArr); // out = [0,1,2,3,4,5,6]
console.log(newArr); // out = 0,1,2,3,4,5,6
console.log(typeof newArr) // out = string

// slice, splice

console.log("A ",myArr); //out = A [0,1,2,3,4,5,6]

const myn1 = myArr.slice(1,3) 

console.log(myn1); // out = [1,2]
console.log("B ",myArr); //out = B [0,1,2,3,4,5,6]

const myn2 = myArr.splice(1,3)
console.log(myn2); // out = [1,2,3]

console.log("c ",myArr); //out = c [0,4,5,6]