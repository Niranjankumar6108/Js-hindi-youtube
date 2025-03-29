// const tinderUser = new Object() 
const tinderUser = {} // out = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggendIn = false

console.log(tinderUser); //{id: '123abc', name:'Sammy',isLoggedIn:false}

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b"}
const obj3 = {obj1,obj2}

console.log(obj3) // out = {obj1:{'1':"a",'2':'b'}, obj2:{'3':'a','4':'b'}}

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)// out = {'1':"a",'2':'b','3':'a','4':'b'}

const obj5 = {...obj1,...obj2}
console.log(obj5) // out= {'1':"a",'2':'b','3':'a','4':'b'}

const users = [
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
]

users[1].email
console.log(tinderUser); // out = {id:'123abc',name:'Sammy',isLoggedIn:false}

console.log(Object.keys(tinderUser)); // out = ['id','name','isLoggedIn']

console.log(Object.values(tinderUser)); // out = ['123abc','Sammy',false]

console.log(Object.entries(tinderUser)); // out = [['id','123abc'],['name','Sammy'],['isLoggedIn',false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // out = true

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

console.log(courseInstructor);// out = hitesh
console.log(instructor);// out = hitesh

// API

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]