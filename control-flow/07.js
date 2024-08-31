// const mynums=[10,20,30,40,50,60,70,80,90,100];

// const newNums=mynums.map((num)=> num+10)
// console.log(newNums);

// const newNums=mynums.map((num)=> num*10).map((num)=> num+1).filter((num)=>(num>200))
// console.log(newNums);

//reduce

const myNums=[1,2,3];

const myTotal= myNums.reduce(function(acc,cvalue){
    console.log(`acc:${acc} and  cvalue:${cvalue}`);
    
return acc + cvalue;
},acc=3)
console.log(myTotal);
// const myTotal= myNums.reduce((acc,cvalue)=>{
// return acc + cvalue;
// },0)
// console.log(myTotal);

const shoppingcart=[
    {
        course:"js",
        price:999
    },
    {
        course:"python",
        price:1999
    },
    {
        course:"flutter",
        price:2999
    },
    {
        course:"Datascience",
        price:3999
    }
    
]


const pricetopay= shoppingcart.reduce((acc,item)=>acc + item.price,0);
console.log(pricetopay);
