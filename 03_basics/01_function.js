
function sayMyNAme(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyNAme()


// Qu-1
function addTwonumber(num1,num2){// parameter
   console.log( num1+num2);
}

addTwonumber() //out = Nan , argument

// Q-2
function addTwonumber(num1,num2){
    console.log( num1+num2);
 }
 
 addTwonumber(3,4) //out = 7

 // Q-3
function addTwonumber(num1,num2){
    console.log( num1+num2);
 }
 
 addTwonumber(3,"4") //out = 34

 // Q-4
function addTwonumber(num1,num2){
    console.log( num1+num2);
 }
 
 addTwonumber(3,"a") //out = 3a

 // Q-5
function addTwonumber(num1,num2){
    console.log( num1+num2);
 }
 
 addTwonumber(3,null) //out = 3


 // Q-6
function addTwonumber(num1,num2){
    console.log( num1+num2);
 }
 
const result = addTwonumber(3,5) 

console.log("Result",result); //out = Result:undefind

// 7
function addTwonumber(num1,num2){
    let result1 = num1+num2
    console.log("Hitesh");
    return result1;
 }
 
const result1 = addTwonumber(3,5) 

console.log("Result",result1); //out = hitesh,Result:8

// Q-8
function loginUserMessage(usename){
    return `${usename} just logged in`
}
loginUserMessage("hitesh") //out = kuch nhi
console.log(loginUserMessage("hitesh")) // out = hitesh just logged in
console.log(loginUserMessage("")) // out = just logged in
console.log(loginUserMessage()) // out = undefind just logged in


//Q-9
function loginUserMessage(usename){
    if(usename === undefined){
        console.log("Please Enter a username");
    }
    return `${usename} just logged in`
}
console.log(loginUserMessage()) // out = Please Enter a username,undefind just logged in

//Q-10
function loginUserMessage(usename){
    if(usename === undefined){
        console.log("Please Enter a username");
        result;
    }
    return `${usename} just logged in`
}
console.log(loginUserMessage()) // out = Please Enter a username,undefind 

//Q-11
function loginUserMessage(usename="sam"){
    if(usename === undefined){
        console.log("Please Enter a username");
        result;
    }
    return `${usename} just logged in`
}
console.log(loginUserMessage()) // out = sam just logged in
console.log(loginUserMessage("hitesh"))// out = hitesh just logged in

// Q-12
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2)); // out = 2

// Q-13
function calculateCartPrice(...num1){// rest operater,spread
    return num1
}
console.log(calculateCartPrice(200,300,400)); // out = [200,300,400]

// Q-14
function calculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000)); // out = [500,2000]


//Q-15
const user = {
    usename:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usename} and price is ${anyobject.price}`);
}
handleObject(user) // out = Username is hitesh and price is 199

//Q-16
const user1 = {
    usename:"hitesh",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usename} and price is ${anyobject.price}`);
}
handleObject(user1) // out = Username is hitesh and price is undefined
handleObject({
    usename:"Niranjan",
    prices:243
}) // out = Username is Niranjan and price is 243

// Q-17
const myNewArray = [200,400,100,600]
function returnSecondValue(getAray){
    return getAray[1]
}
console.log(returnSecondValue(myNewArray)); // out = 400
console.log(returnSecondValue([200,400,500,1000]));