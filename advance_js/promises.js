
// promises reduce call backHell .callback Hell is the callback under callbacks.
// promise is eventual completion object of an asynchronous operations


// creation of promise
// 1st type
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls,cryptography,network calls

    setTimeout(() => {
        console.log('Async Task is completed');
        resolve();//connected with `.then()` without resolve it is not connected with `.then()`.
    }, 1000);//<- 1st this section will run/execute then go to reslove section ,then it will run `.then()` function.
});//creation promises



// consumition `.then()` related to resolve
promiseOne.then(() => {
    console.log("promise consumed");
})

// 2nd type

new Promise(function (reslove, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        reslove();
    }, 2000);
}).then(() => {
    console.log(".then will run Async 2 resolved");

})


//3rd type

const promisethree = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve({
            username: "Avidev Jha",
            email: "xyz@gmail.com"
        })//passing data (array,object,function can be passes)
    }, 3000);
})


promisethree.then((user) => {//fetching data
    console.log(user);

})


// 4th promise

const promiseFour = new Promise((reslove, reject) => {

    setTimeout(() => {
        // let error = false;//here error is false
        let error = true;//here error is true
        if (!error) {//not an error
            reslove({ username: "hitesh", password: "123456" })
        } else {
            reject('ERROR:SOMETING WENT WRONG')
        }
    }, 4000);
})

// use in database connection 
const userName = promiseFour.then((user) => {//how to avoid call back hell
    console.log(user);
    return user.username;
}).then((myusername) => {
    console.log(myusername);

}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is being resolved or rejected")
)


const promiseFive = new Promise((resolve, rejected) => {
    setTimeout(() => {
        let error = false;//here error is false
        //let error = true;//here error is true
        if (!error) {
            resolve({ username: "js", password: "123456" })
        } else {
            rejected('ERROR:js WENT WRONG')
        }
    }, 5000);
})

// async await syntax
async function consumedPromiseFive() {
    try {
        const res = await promiseFive;
        console.log("res", res);
    } catch (error) {
        console.log(error);

    }

}
// one disadvantage of async and await is they don't handle the errors directly. For error Handling we use try catch block

consumedPromiseFive();

// try catch syntax

// async function getAllusers() {
//     try {
//         const responseFetch = await fetch('https://api.github.com/users/Avidev1234');
//         //   console.log(responseFetch);
//         const data = await responseFetch.json();//converting to JSON
//         console.log(data);
//     } catch (error) {
//         console.log("error");

//     }
// }

// getAllusers();

// try catch syntax

// ------------showing error------------------------------
// const fetchingData=new Promise(function (reslove,reject) {
//     fetch('https://api.github.com/users/Avidev1234');
//     reslove();
// })

// fetchingData.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
// console.log(err);

// })
// ------------showing error------------------------------
fetch('https://api.github.com/users/Avidev1234')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
        console.log(err);

    })
