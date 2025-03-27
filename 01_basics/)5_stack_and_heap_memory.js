// Premitive

// 7 type: String,Number,Boolean,null,underfined,symboll,BigInt

// Reference (Non premitive)
// Array , Object, Function

// Stack (primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername =myYoutubename // kewal copy
anothername = "chaiaurcode"

console.log(myYoutubename); //out=hiteshchoudharydotcom
console.log(anothername); // out=chaiaurcode

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne // same address

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);// out=hitesh@gmail.com
console.log(userTwo.email);// out=hitesh@gmail.com