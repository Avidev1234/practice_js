const User={
    _email:'sddfs@sfs',
    _password:'wsdsd',


    get email(){
        return this._email.toUpperCase();
    },

    set email(val){
        this._email=val;
    },
    get password(){
        return this._password.toUpperCase();
    },

    set password(val){
        this._password=val;
    }
}


const tea=Object.create(User);
console.log(tea.password);