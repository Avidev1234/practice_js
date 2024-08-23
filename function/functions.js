function calcartPrice(...num) { //...num is rest operator
    return num;
}

// console.log(calcartPrice(200,400,500,800,600));


//------------------------- handleObject(user)-------------------
const user = {
    userName: "Hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject({
    userName: 'sam',
    price: 399
})

// or 
// handleObject(user)
//----------------------------- For Arrays------------------------

const myNewArray = [1000, 200, 300, 400];

function returnSecondValue(getArray) {
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
// or
// console.log(returnSecondValue([800, 900, 1000, 2000]));



// --------------------------------X----------------------------
// Normal function
function AddNum(num1, num2) {
    // console.log(num1+num2);
    return num1 + num2;
}
let res = AddNum(10, 10);
console.log(res);

function loginuserMessage(userName = "anyuser") {
    if (!userName) {
        console.log("Please enter username properly");
        return
    }
    return `${userName} just logged in`
}
console.log(loginuserMessage("Aman"));
// console.log(loginuserMessage());



