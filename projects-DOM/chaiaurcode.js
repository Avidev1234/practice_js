const button=document.querySelectorAll('.button');
// console.log(button); //output as Nodelist

const body=document.querySelector("body");
console.log(body);
const head=document.querySelector("h1");
// console.log(head);

button.forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id==='grey') {
            body.style.backgroundColor=e.target.id;
            head.style.color="white";
            // body.style.backgroundColor="grey";
        } else if (e.target.id ==='white') {
            body.style.backgroundColor=e.target.id;
            head.style.color="black";
        }else if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;
            head.style.color="white";
        }else{
            body.style.backgroundColor="yellow";
            head.style.color="black";
        }
        
    })  
}) 