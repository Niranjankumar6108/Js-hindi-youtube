// singletonn
Object.create


myArray = ["h", "i"]
myArray[1]

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Hitesh",
    "full name":"Hitesh choudhary",
    mySym: "mykey1",//[mySym] tob key ka use hoga
    age:18,
    location:"jaypur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);// output = mykey1
console.log(typeof JsUser.mySym);// output = string

JsUser.email = "hiteshQchatgpt.com"
Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting()); // Hello js user
console.log(JsUser.greetingTwo()); // Hello js user hitesh
