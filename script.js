let decrementButton  = document.querySelector("#decrement")
let incrementButton  = document.querySelector("#increment")
let clearButton  = document.querySelector("#clear")
let counterNumber = document.querySelector("#counterNumber")
let errorSpace = document.querySelector("#errorSpace")

//clearButton.style.display = "none"

decrementButton.addEventListener("click", decrement)

function decrement()
{
    let count = Number(counterNumber.innerHTML)
    count = count - 1

    if (count<=0)
    {
        count = 0 
        errorSpace.innerHTML = `Error: Cannot go below 0` 
        clearButton.style.display = "none"
    }

    if(count>1)
    { clearButton.style.display = "inline-block" }  

    counterNumber.innerHTML = `${count}`    
}


incrementButton.addEventListener("click", increment)

function increment()
{
    let count = Number(counterNumber.innerHTML)
    count = count + 1
    errorSpace.innerHTML = "" 
    clearButton.style.display = "inline-block"

    if (count==1)
    {
        errorSpace.innerHTML = `Error: Cannot go below 0`
    }

    counterNumber.innerHTML = `${count}`   
}


clearButton.addEventListener("click", clear)

function clear()
{ 
    counterNumber.innerHTML = 0
    //clearButton.style.display = "none"
 }


