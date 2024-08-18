const user = {
    userName: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
        // `this` gives the current values/current context

    }
}

// user.welcomeMessage();
// user.userName="sam";
// user.welcomeMessage()

console.log("654", this);

// Note:-Browsers global object is `window`



// function chai() {
//     let user_1="Avi"
//     console.log(this.user_1);
//     // only `this` can be used in objects not in functions

// }

// chai()


// const chai = function (params) {
//     let userName="Avidev Jha";
//     console.log(this);
//     // console.log(this.userName);//undefined

// }

const chai = (params) => {
    let userName = "Avidev Jha";
    console.log(this.userName);//undefined
    // console.log(this);{}

}
chai()


// (Explicit)Basic arrow function:-Have to used `return` when put '{}'
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// Implicit return:-No need to use `return` when put `()` or normally put without `()`
// const addTwo=(num1,num2)=>  num1+num2;
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({use:"ss"});

console.log(addTwo(10, 10));