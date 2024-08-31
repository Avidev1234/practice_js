const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// array

const list=["js","py","cpp","css"];
for (const key in list) {
    console.log(list[key]);
    
}

// const map=new Map();
// map.set('IN','INDIA');
// map.set('USA','UNITED SATATES OF AMERICA');
// map.set('FR','FRANCE');

// for (const key in map) {
//     console.log(key);
// }