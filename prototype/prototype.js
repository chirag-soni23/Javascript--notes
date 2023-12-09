let myHeros = ["thor","superman"]

let heroPower ={
    thor:"Hammer",
    superman:"Power",
    getsuperman:function(){
        console.log(`Superman power is ${this.spiderman}`);
    }
}
Object.prototype.chirag = function(){
    console.log(`Chirag is present in all objects`);
}
Array.prototype.heyChirag = function(){
    console.log(`Chirag says hello`);
}
heroPower.chirag()
myHeros.heyChirag()
// heroPower.heyChirag()

1.//Inheritance
const user ={
    name:"Chai",
    email:"Chail@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport ={
    isAvailable: false
}
const TAsupport = {
    makeAssignment: "js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = 'Chaiaurcode       '
String.prototype.trueLength  = function(){
    console.log(this);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"Javascript".trueLength()
"Python".trueLength()
