class Users {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }

    get email(){
        return `${this._email}.toUpperCase()`;
    }
    set email(value){
       this._email=value.toUpperCase();
    }
    get pass(){
        return `${this._pass}.toUpperCase()`;
        // return this._pass.toUpperCase();
    }
    set pass(value){
       this._pass=value.toUpperCase();
    }
}

const myUser=new Users("ak@gmail@com","ghfg");
console.log(myUser);
