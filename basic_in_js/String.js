console.log("string");

const userName = "Programmer";
const repocount = 10;

// console.log(userName + repocount + "ghjhvjhgjk");

console.log(`Hello my Name is ${userName} and my repo count is ${repocount}`);


const gameName = new String("asdfqad4sadfdrtgheryerty");
console.log(typeof (gameName));

console.log(gameName[0]);
console.log(gameName.__proto__);

// Check all the methods in string:
console.log(gameName.length);
// let newGame=gameName.toUpperCase();
// console.log("newGame",newGame);
console.log("gameName", gameName);
console.log("gameName", gameName.charAt(2));
console.log("gameName", gameName.indexOf('d'));

const checkSubstring = gameName.substring(0, 4)
console.log(checkSubstring);


const anotherString = gameName.slice(-30, 3);
console.log("anotherString", anotherString);



const newStringOne= "      jhvgjkh       ";
console.log(newStringOne);
console.log(newStringOne.trim());//It remove the space problem from 1st and end
const url ="https://jkbjb.com/ghjkbh%20kjhjkh";


console.log(url.replace('%20', '-'));
