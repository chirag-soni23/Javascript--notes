// const user = {
//     username: "Chirag",
//     logginCount:8,
//     signedIn:true,
//     getUserdetails:function(){
//         // console.log("Got user details database");
//         console.log(`username : ${this.username}`);
//         // console.log(this);
//     }
// }
// console.log(user.username);
// // console.log(user.getUserdetails());
// console.log(this);

1. // Contructor function
function user(username,logginCount,isLoggedIn)
{
    this.username = username
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;

}
const UserOne = new user("Chirag",12,true)
const UserTwo = new user("chai",11,false)
console.log(UserOne.constructor);
console.log(UserOne);
console.log(UserTwo);
