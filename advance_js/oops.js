// object literal

const user={
    userName:"Aman",
    loginCount:8,
    signedIn:true,
    
    getUserDetails:function(){
    //    return "user Details";
        // console.log("user Details");
        console.log(`username:${this.userName}`);
        console.log(this);
        
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());


// const promiseOne=new Promise();
// const date=new Date();
// const arr=new Array()