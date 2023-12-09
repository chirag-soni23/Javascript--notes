const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


const chai = {
    name:"Ginger",
    price: 250,
    isAvailable:true,
    orderChia: function(){
        console.log("hello chai");
    }

}
Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== "function"){

        console.log(`${key}:${value}`);
    }

    
}

