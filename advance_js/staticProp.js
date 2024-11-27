class User{
    constructor(userName){
        this.username=userName;
    }

    logMe(){
        console.log(`My login Username is: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const userSec=new User('hitesh');
// console.log(userSec.createId());


class Teacher extends User{
    constructor(username,email){
        super (username)
        this.Email=email;
    }
}


const myname=new Teacher('gvhvg','gfv@gmail.com');
console.log(myname);
myname.logMe()
myname.createId()


// conclusion of `static` keyword is it doesnot allow that particular function/properties to be accessed directly or through inheritance.