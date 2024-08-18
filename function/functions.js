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

//----------------------------- For Arrays------------------------

const myNewArray = [100, 200, 300, 400];

function returnSecondValue(getArray) {
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([800, 900, 1000, 2000]));