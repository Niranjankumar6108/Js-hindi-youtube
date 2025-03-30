//Q-1
let a = 10
const b = 20
var c = 30

console.log(a);// out = 10
console.log(b);// out = 20
console.log(c);// out = 30

// Q-2
if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a);// out = not defind
console.log(b);// out = not defind
console.log(c);// out = 30

// Q-3
var c = 300
if(true){
    let a = 10
    const b = 20
    c = 30
}
console.log(c);// out = 30

// Q-4
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a); // out = INNER = 10
}
console.log(a);// out = 300
console.log(b);// out = not defind

// Q-5
function one(){
    const usename = "hitesh"

    function two(){
        const website = "youtube"
        console.log(usename);
    }
    console.log(website); // yaha error kyo ki two me hi khatam ho gya h
    two() // uper wala line hi error de diya yis liye not two defind
}
one()

//Q-6
function one(){
    const usename = "hitesh"

    function two(){
        const website = "youtube"
        console.log(usename);
    }
    // console.log(website); 
    two() 
}
one()

//out = hitesh

// Q-7 
if(true){
    const usename = "hiesh"
    if (usename === "hitesh"){
        const website = "youtube"
        console.log(username+website);
    }
    console.log(website); // first error , comment 
}
console.log(username); // second error , comment

// out = hitesh youtube

//************Intresting ******
// Q-1
function addone(num){
    return num +1
}
addone(5) // kewal value hai

//Q-2
const addTwo = function(num){
    return num +2
}
addTwo(5)

// Q-3
console.log(addone(5)) // out = 6
function addone(num){
    return num +1
}

//Q-4
console.log(addTwo(5)) // error not access
const addTwo = function(num){
    return num +2
}


