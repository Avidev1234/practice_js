// after ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


// const chai =new User('Amn','aman@gmail.com','122456');
// console.log(chai.changeUsername());

// behind scene without class

function Users(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

Users.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
Users.prototype.changeUsername=function(){
    return `${this.password}abc`;
}


const tea =new Users('Tea','aman@gmail.com','122456');
console.log(tea.changeUsername());