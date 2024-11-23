function multiply(num) {
    // this.num=num;
    return num * 5;
}

multiply.power = 2;

console.log(multiply(5));//25
console.log(multiply.power);//2
console.log(multiply.prototype);//->{}
// here `.prototype` by default set the context , and it refer to the `this` keyword for the following method.

function createUser(username, score) {
    this.username = username; //`this` is current context
    this.score = score;
}

// declaring own function

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);

}

// Here we have to use new keyword to take createUser as a refrence.
// when `new` keyword is used we understand that we have to assamble all those prototype.It taken object and injected the prototype and method on the basis/refrence of createUser
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();


/*
Here's what happens behind the scene when the `new` keyword is used:

A new object is created : The new keyword initiates the creation of new javascript object.

A prototype is linked:The newly created object gets linked to the prototype property of the constructor function.This means that it has access to properties and methods defined on the constructor's prototype.
JAvascript give constructor function through new keyword


The constructor is called:The constructor function is called with specified arguments and tjod id bound to the newly created object. If no explicit return value is specified from constructor, javscript assumes this the newly created object ,to be initiated return value.

The new object is returned:After the constructor function has been called ,if it doesnot return a non-primitive value (array,object,function) the newly created object is returned.

*/