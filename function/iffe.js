// IFFE:-Immediately Invoked Function Expression.To stop pollution in child function due to parent function or due to pollution of global scope,to stop them we use iffe


// Named iffie
// (function chai(params) {
//     console.log(`DB CONNECTED`);
// })();

// Named iffie
// (function username(params) {
//     console.log("Connected");

// })();


((name) => {
    console.log(`My name is ${name}`);

})('Avidev')