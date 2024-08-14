// singleton:-when created through constructor.
// Object.create

//---------------------------- object literals----------------------------------
const mySymbol = Symbol("sdfsdfdfsfaf");
const js_user = {
    name: "Avidev",
    age: 52,
    [mySymbol]: "Avidev Jha",
    "fullName": "sadasds",
    location: "JSR",
    email: "avi@gmail.com",
    isLoggedIn: false,
    lastLoggindays: ["Monday", "Saturday"]
};

// console.log(js_user["age"]);
// console.log(js_user.email);
// console.log(typeof (js_user[mySymbol]));
// console.log(js_user["fullName"]);
// console.log(js_user[mySymbol]);



// js_user.email="avidevj@gmail.com";
// Object.freeze(js_user);//freeze 

js_user.email = "avidevjha9@gmail.com";
console.log(js_user.email);


// console.log(js_user);


js_user.greetings = function (params) {
    console.log("Hello everyone!!");

}
js_user.greetingsTwo = function (params) {
    console.log(`Hello everyone!!, my age is ${this.age}`);

}

console.log(js_user.greetings());
console.log(js_user.greetingsTwo());


// --------------------constructor/singleton-----------------------

// const newObj=new Object();
const newObj = {}

newObj.id = "123abcd";
newObj.name = "Sam";
newObj.age = "54";
newObj.isLoggedOut = "Sunday";
newObj.time = "10:00AM"
// console.log(newObj);

const regUser = {
    email: "reguser@gmail.com",
    fullName: {
        userName: {
            firstName: "Aman",
            lastName: "kumar"
        }
    }
}

// console.log(regUser.fullName.userName);

const obj_1={
    1:"abc",
    2:"efg"
}
const obj_2={
    3:"three",
    4:"four"
}
const obj_4={
    5:"five",
    6:"six"
}

// const obj_3={obj_1,obj_2};
// const obj_3=Object.assign({},obj_1,obj_2,obj_4);
const obj_3={...obj_1,...obj_2,...obj_4}
console.log(obj_3);



const db_user=[
    {
        id:"1",
        email:"h@gmail.com"
    },
    {
        id:"2",
        email:"hr@gmail.com"
    },
    {
        id:"3",
        email:"hef@gmail.com"
    },
    {
        id:"4",
        email:"hng@gmail.com"
    },
]

db_user[1].email;

console.log(newObj);
console.log(Object.keys(newObj));//it returns only key in array format
console.log(Object.values(newObj));//it returns only values in array format
console.log(Object.entries(newObj));//it return both in array format 

console.log(newObj.hasOwnProperty('timedf'));//it will check weather the key/property is there ot not

