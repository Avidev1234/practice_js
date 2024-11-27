const checkDescriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(checkDescriptor);



// console.log(Math.PI);

const newObj={
    userName:'Black Tea',
    price:250,
    isAvialable:true,

    OrderChai:function(){
        console.log("Not work");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(newObj,'userName'));

// Object.defineProperty(newObj,'userName',{
//     writable:false,
//     enumerable:false
// })


// console.log(Object.getOwnPropertyDescriptor(newObj,'userName'));


for (let [key,val] of Object.entries(newObj)) {

    if (typeof val!=='function') {
        console.log(`value of ${key}:${val}`);
        
    }
}