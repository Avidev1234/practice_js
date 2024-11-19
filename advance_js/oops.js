// object literal

const user = {
    userName: "Aman",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //    return "user Details";
        // console.log("user Details");
        // console.log(`username:${this.userName}`);
        // console.log(this);


    }
}

//console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);{}


// constructor Function:-

// here `new` keyword is the constructor function which will create multiple instance from single object


// const promiseOne=new Promise();
// const date=new Date();
// const arr=new Array()


//function has only one Global Execution Context (GEC)
function User(username, loginCount, isLoggedIn) {
    this.myusername = username;//assigning username to myusername
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings=function(){
        console.log(`welcome ${this.userName}`);
        
    }
    return this; (optional)
}

const userOne = new User("Avidev", 200, true);
const userTwo = new User("Alok", 45, 'true');
console.log(userOne);
console.log(userTwo);

// conclusion of constructor section is if we don't use constructor it gives the latest code what ever we try to  `console` it will override the code from old one to new and if we use `new` keyword there will be new instance created.

// `new` keyword create empty object
// constructor function is being called due to new keyword and it pass the all different argument.
// using `this` keyword pass the arguments

