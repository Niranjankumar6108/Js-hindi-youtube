const user = {
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this)//out = {username:"hitesh",price:999,welcomeMessage:[function:welcomeMessage]}
    }
}
user.welcomeMessage() // out = hitesh , welcome to website
user.usename = "sam"
user.welcomeMessage()// out = sam, welcome to website
console.log(this)// out = {}-->empty object,this refer karta h browser ke andar global object window or node envernment ke andar {}

// Q-1
function chai(){
    let usename = "hitesh"
    console.log(this.usename);
}
chai() //out undefined

//Q-2
const chai = function(){
    let usename = "hitesh"
    console.log(this.usename);
}
chai() //out undefined

//Q-3
const chai = ()=>{
    let usename = "hitesh"
    console.log(this.usename);
    console.log(this)//out = {}
}
chai() //out undefined

//Q-4
const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))// out = 7

//Q-5
const addTwo1 = (num1,num2) =>  num1 + num2
console.log(addTwo(3,4))// out = 7

//Q-6
const addTwo2 = (num1,num2) =>  (num1 + num2)
console.log(addTwo(3,4))// out = 7

//Q-7
const addTwo3 = (num1,num2) =>  ({usename:"hitesh"})
console.log(addTwo(3,4))// out = 7

//Q-8
const myArray = [2,5,7,4,8]
myArray.forEach(function(){})