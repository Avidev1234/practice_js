// to find ourt the property of the object
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

// defining the properties of object using `defineProperty` function ,with this property we can change the property of object

Object.defineProperty(newObj,'userName',{
    // writable:false,
    enumerable:false
})


console.log(Object.getOwnPropertyDescriptor(newObj,'userName'));

// when you want to use `forof` loop in objects you have to use `.entries`
for (let [key,val] of Object.entries(newObj)) {

    if (typeof val!=='function') {
        console.log(`value of ${key}:${val}`);
         
    }
}