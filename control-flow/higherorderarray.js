// for-of



// ["","","","",""]
// [{},{},{},{}]



const arr=[1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const greetings ="Hello world!";

for (const i of greetings) {
    console.log(`Each char is ${i}`);
    
}


// maps

const map=new Map();
map.set('IN','INDIA');
map.set('USA','UNITED SATATES OF AMERICA');
map.set('FR','FRANCE');

// console.log(map);

for (const [key,val] of map) {
    console.log(key, ':-',val);
}


const myobj={
    'game':"cod",
    'game2':"POP"
}

// for (const [games,val] of myobj) {
//     console.log(games,':-',val);
// }