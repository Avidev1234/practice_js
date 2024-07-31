console.log("Number");

const balance =new Number(100);
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//100.0

const otherNum=123.8756;
console.log(otherNum.toPrecision(4));//intresting and important


const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'));

// -----------------------X-------------------------------

// Maths
// console.log(Math);
// console.log(Math.abs(-2500));
// console.log(Math.round(15.85));
// console.log(Math.ceil(12.5));
// console.log(Math.floor(12.5));
// console.log(Math.sqrt(36));
// console.log(Math.min(3,6,-5,25,10));
// console.log(Math.max(3,6,-5,25,10));



console.log(Math.random());// between 0-1 range
console.log(Math.random()*10+1);// to case of 0's
console.log(Math.floor(Math.random()*10)+1);// to case of 0's


const min=10;
const max=20;
console.log(Math.floor((Math.random()*(max-min+1))+min));
