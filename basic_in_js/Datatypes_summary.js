// primitve(call by value) which have a copy
// 7 types: string,Number,Bool,Null,undefined,symbol,BigInt

// Refrence type (which takes the refrence):Arrays,objects,functions

const id = Symbol('354');
const anotherId = Symbol('354');

console.log(id === anotherId);

const outsideTem = null
const bigNumber = 36856255545465465457n;


const city = ["Kolkata", "Assam", "JSR"];

let myObj = {
    userName: "asx",
    age: 54,
}

const myFunc = function () {
    console.log("Hello world");
}

// console.log(typeof city);
// console.log(typeof anotherId);
// console.log(typeof outsideTem);



// Memory Details :-
// stack(primitive) and Heap(Refrence)
// stack(primitive):-when variable is being declared we get a copy.
// Heap(Refrence):- When variable is being declared we gert a refrence.


let myYoutubeName="avij@gmail.com";
let anotherName=myYoutubeName;
anotherName="jbhhsadd";
console.log("anotherName",anotherName);
console.log("myYoutubeName",myYoutubeName);


let user={
    email:"user@gmail.com",
    upi:"user@ybl",

}


let userTwo=user;
userTwo.email="jhbb@gmail.com"

console.log(user.email);
console.log(userTwo.email);