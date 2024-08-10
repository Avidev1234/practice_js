// Arrays  part-1

// const myArr = new Array(1, 2, 3, 10, 5);
// console.log(myArr[0]);

// console.log("Array");
// myArr.push(6);
// myArr.push(12);
// myArr.push(18);
// myArr.pop(18);
// myArr.pop(12);
//myArr.unshift(9);//insertion in the starting
// myArr.shift();//remove in the starting
//console.log(myArr.includes(9));//bool false
// console.log("index",myArr.indexOf(2));//1

// const newArr =myArr.join();
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

// console.log("original Array",myArr);

// const myn1=myArr.slice(1,4);//1-3
// console.log("slice is",myn1);
// console.log("After slice",myArr);

// const myn2=myArr.splice(1,4);//1-4
// console.log("After splice",myArr);
// console.log(myn2);
// Note for splice :- myArr.splice(1,4) means it will remove the 0th index from original array only 


//-------------------- Arrays  part-2-----------------------
// Note:-Push doesnot mutate the arrays but contact mutate the arrays

const city = ['Saharsa', 'Barauni', 'Darbhanga'];
const state = ['Andhra Pradesh', 'Bihar'];

// const merge=city.push(state);
// console.log("merge",city);
// console.log("merge",city[3][1]);
let combo = city.concat(state);
console.log("combo", combo);

// Alternative of concat is spread operator

// const all_city_state=[...city,...state];
// console.log("all_city_state",all_city_state);


const another_array=[5,4,4,10,45,0,1,[2,45,2,9,4,[5,6,87,100,25,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log((Array.isArray("asasd")));//return true or false

console.log(Array.from("sacasd"));//conversion

console.log(Array.from({name:"sdsfd"}));//intresting case for interviews

let score1=100;
let score2=200;
let score3=500;
let score4=800;

console.log(Array.of(score1,score2,score3,score4));


