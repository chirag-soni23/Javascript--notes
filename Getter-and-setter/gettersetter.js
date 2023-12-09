class User {
    constructor(email,password) {
        this.email = email,
         this.password = password   
    }
    get email(){
        return this._email.toUpperCase() + ' chirag email'
    }
    set email(value){
         this._email = value
    }
    get password(){
       return `${this._password} Chirag`
    }
    set password(value){
     this._password = value.toUpperCase()
    }
}

const chirag = new User("cs234@gmail.com","abc")
console.log(chirag.password);
console.log(chirag.email);
