class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`uername is ${this.username}`);
    }

    static creteId(){
        return `123`
    }
}
const chirag = new user("chirag")
// console.log(chirag.creteId())

class Teacher extends user {
    constructor(username,email) {
        super(username)
        this.email = email
        
    }
}
const iphone =new Teacher("iphone","i@gmail.com")
console.log(iphone.logme())