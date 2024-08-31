// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value of i is :${i}`);
    
//     for (let j = 0; j < 2; j++) {
//         // console.log(`inner loop value of j is:${j} & Outer loop value of i is :${i} `);

//         console.log(i+'*'+j +'='+i*j);
        
//     }
// }



// let myArray=["sdfs","sdffds","ffsa"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue


for (let i = 1; i <=20; i++) {
  if (i==5) {
    console.log(`Dected 5`);
    continue;
  }
    console.log(`value of i is:${i}` ); 
}