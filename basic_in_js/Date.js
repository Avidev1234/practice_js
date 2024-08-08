// Dates

let myDate = new Date();
console.log(myDate.toString());//Thu Aug 08 2024 04:40:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Thu Aug 08 2024
console.log(myDate.toLocaleString());//8/8/2024, 4:41:27 AM
console.log(myDate.getUTCDate());//8

console.log(typeof myDate);


// let mycreatedate = new Date(2023, 0, 23);
// let mycreatedate = new Date(2023, 8, 23 , 5 ,3);
let mycreatedate = new Date("01-14-2023");
console.log(mycreatedate.toDateString());//Mon Jan 23 2023
console.log(mycreatedate.toLocaleString());//9/23/2023, 5:03:00 AM


let myTimeStamp = Date.now();

// console.log(myTimeStamp); //from 1st Jan 1970 to today in millisec 1723092511664(sec)

// console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now() / 1000));//from millisec to sec


let newDate=new Date();
console.log(newDate);
// console.log(newDate.getDate());//8
// console.log(newDate.getDay());//thur->4
// console.log(newDate.getFullYear());//2024
// console.log(newDate.getHours());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})


