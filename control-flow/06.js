const lang = ["js", "cpp", "php", "css"];

// for each loop cannot return values so we use filter,map,reducer
// const values=lang.forEach((items)=>{
//     // console.log(items); 
//     return items;
// })
// console.log("values",values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((nums) => { return nums > 4 });
// // const newNums = myNums.filter((nums) => nums > 4 );
// console.log(newNums);

// -----------------------------OR------------------------------------

// const newNums=[];
// myNums.forEach((nums)=>{
//     if (nums>4) {
//         newNums.push(nums)
//     }
// })
// console.log(newNums);



const books=[
    {
        title: 'Book1',
        genere:'history',
        publish:1900
    },
    {
        title: 'Book2',
        genere:'phlisophy',
        publish:1902
    },
    {
        title: 'Book3',
        genere:'history',
        publish:1999
    },
    {
        title: 'Book4',
        genere:'science',
        publish:2000
    },
    {
        title: 'Book5',
        genere:'Literature',
        publish:1904
    },
    {
        title: 'Book6',
        genere:'history',
        publish:1910
    },
    {
        title: 'Book7',
        genere:'Fiction',
        publish:1908
    }
]

// const myBooks= books.filter((bname)=>(bname.genere=="history"));
// console.log(myBooks);

// ---------------OR----------------------------------------
// const myBooks =books.filter((bname)=>{ return bname.genere=="history"})
// console.log(myBooks);

// ---------OR------------------

const myBooks=books.filter((bname)=>{return bname.publish>1990})
console.log(myBooks);
