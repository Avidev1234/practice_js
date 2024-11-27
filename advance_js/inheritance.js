class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is  ${this.username}`);

    }
}

class Teacher extends User{
    constructor(username,email,password,role){
        super(username); //new logic which replace `call` keyword
        this.email=email;
        this.password=password;
        this.role=role;
    }

    addcourses(){
        console.log(`New course was added by ${this.username}`);
    }
}

const teacher=new Teacher("Aman",'aman@gmail.com','*****','php course');
// console.log(teacher);
teacher.logMe();

const newUser=new User('Ashish');
newUser.logMe();
// console.log(newUser);

