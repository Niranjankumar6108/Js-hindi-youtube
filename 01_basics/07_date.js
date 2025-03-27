
// Date

let myDate = new Date()
console.log(myDate); // out = 2025-03-27T21:01:45.585Z
console.log(myDate.toString()); // out = Thu Mar 27 2025 21:02:53
console.log(myDate.toDateString());// out = Thu Mar 27 2025
console.log(myDate.toLocaleDateString()); // out = 3/27/2025
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23) // Mon Jan 23 2023
console.log(myCreatedDate.toDateString())
let myCreatedDate2 = new Date ("01-14-2023")


let myTimeStamp = Date.now()
console.log(myTimeStamp); // out = 1677672589191