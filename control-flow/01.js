// if (2=="2") {
//     console.log("correct");

// } else {
//     console.log("Not");

// }


if ("2" === "2") {
    console.log("Not");
} else {
    console.log("correct");
}

// const score=400
// if (score>200) {
//     let power= "good";
//     console.log(`This score is ${power}`);  
// }
// console.log(`This score is ${power}`);  // error


// const score = 400
// if (score > 200) {
//     var power = "good";
//     console.log(`This score is ${power}`);
// }
// console.log(`This score is ${power}`);  //work

// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
// console.log("less than 1200");

// }



// truthy and falsy values
const userEmail = "avi@gmail.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user Email");
}
// falsy values
// false,0,-0,null,undefined,BigInt 0n,"",NaN

// truthy values
// true,"0",'false'," ",[],{},function(){}


const obj={};
if (Object.keys(obj).length ===0) {
    console.log("empty");
    
}  

// Nullish coalescing Operation (??):null,undefined

let vL1;
// vL1 =5??10;
// vL1 = null??100
// vL1 = undefined ??10
vL1 =null ??20??50
console.log(vL1);
