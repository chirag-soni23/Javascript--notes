const buttons = document.querySelectorAll(".button")
console.log(buttons);

const body = document.querySelector("body")

buttons.forEach((allbtns)=>{
    console.log(allbtns);
    allbtns.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
        body.style.background = e.target.id
        }
        if(e.target.id === 'green'){
        body.style.background = e.target.id
        }
        if(e.target.id === 'yellow'){
        body.style.background = e.target.id
        }
        if(e.target.id === 'blue'){
        body.style.background = e.target.id
        }
    })
})