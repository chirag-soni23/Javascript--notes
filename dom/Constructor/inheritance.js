class user{
    constructor(username) {
        this.username = username
        
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password      
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("Chai","Chai@gmail.com",123)
chai.addCourse()

const masalaChai = new user("masalachai")
masalaChai.logMe()

console.log(chai instanceof user);