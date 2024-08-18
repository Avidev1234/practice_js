// var c=300;
let a100 = 300;
if (true) {

    let a = 10;
    const b = 25;
    console.log(a);
    console.log(a100);

}


// console.log(a);
// console.log(b);
// console.log(c);

// Note:- In var, scopes can be defined outside the block scope also,which is the loophole of var.

// In let,const it is not declare in outside of the block scope.It should be within block scope if it is defined within bock scope. 


// {
//     let a2=2000;
// }
// console.log(a2);
// This code is coming good
{
    var a500 = 2000;
}
console.log(a500);

// Loop hole in this code 
// in case of nested function the variable/propertis of parent function can bee accessed by child function.
function one(params) {
    const usernmae = 'hitesh';
    function two(params) {
        const website = "youtube.com";
        console.log(usernmae);
    }
    //  console.log(website);

    two()
}
one()


if (true) {
    const user = "asdd";
    if (user === "asdd") {
        const web = "w3school"
        console.log(user + web);

    }
    // console.log(web);//cannot be accessed  outside the block scope

}
// console.log(user);//cannot be accessed outside the block scope

// +++++++++++++++intresting++++++++++++++

function addone(num) {
    return num + 1;
}
addone(5)
