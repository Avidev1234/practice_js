// old version of getters and setter
// function based syntax
function User(email,password) {
    this._email=email;
    this._password=password;

    // old getter and setter concept 
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
            this._password=value
        }
    })
}


const myUser=new User("asds@sdf",'xzcc');
console.log(myUser.email);

