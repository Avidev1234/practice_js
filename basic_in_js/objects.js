// singleton:-when created through constructor.
// Object.create

//---------------------------- object literals----------------------------------
const mySymbol=Symbol("sdfsdfdfsfaf");
const js_user={
    name:"Avidev",
    age:52,
    [mySymbol]:"Avidev Jha",
    "fullName":"sadasds",
    location:"JSR",
    email:"avi@gmail.com",
    isLoggedIn:false,
    lastLoggindays:["Monday","Saturday"]
};

// console.log(js_user["age"]);
// console.log(js_user.email);
// console.log(typeof (js_user[mySymbol]));
// console.log(js_user["fullName"]);
// console.log(js_user[mySymbol]);



// js_user.email="avidevj@gmail.com";
// Object.freeze(js_user);//freeze 

js_user.email="avidevjha9@gmail.com";
console.log(js_user.email);


// console.log(js_user);


js_user.greetings=function (params) {
    console.log("Hello everyone!!");
    
}
js_user.greetingsTwo=function (params) {
    console.log(`Hello everyone!!, my age is ${this.age}`);
    
}

console.log(js_user.greetings());
console.log(js_user.greetingsTwo());


// --------------------constructor/singleton-----------------------

// const newObj=new Object();
const newObj ={}

 newObj.id="123abcd";
 newObj.name="Sam";
 newObj.age="54";
 newObj.isLoggedOut="Sunday";
 newObj.time="10:00AM"
console.log(newObj);
