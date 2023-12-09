const promiseOne = new Promise((resolve,reject)=>{
    // do an async task
    //db calls
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve()
    },1000)
    
})
promiseOne.then(function(){
    console.log("Promise Consumed");
})
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username: "Chirag",
            email:"csoni0693@gmail.com",
        })

    },1000)
})
promiseThree.then((user)=>{
    console.log(user);

})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Chirag",Password:123})
        }
        else{
            reject("Error: Something went wrong")
        }
        
    },1000)
})
const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);

}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('The promise is either resolve or rejected');
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Javascript",Password:123})
        }
        else{
            reject("Error: js went wrong")
        }

    },1000)

})

async function consumedPromiseFive(){
   try {
    const response  = await promiseFive;
    console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }

}
consumedPromiseFive()
1.//try catch

// async function getAllUser(){
//     try {
//         const response = await  fetch("https://api.github.com/users/chirag-soni23")
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);  
//     }
// }
// getAllUser()


2.//then catch
fetch('https://api.github.com/users/chirag-soni23')
.then((res)=> {
    return res.json()
})
.then((data)=>{
    console.log(data);

})
.catch((error) =>{
    console.log(error);
})

