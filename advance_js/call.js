function SetUsername(username){
    this.username=username;
    console.log("call");
}


function createUser(username,email,password){
    SetUsername.call(this,username);

    this.email=email;
    this.password=password;
}

const chai=new createUser("Avidev",'avidevjha9@','123456');

console.log(chai);