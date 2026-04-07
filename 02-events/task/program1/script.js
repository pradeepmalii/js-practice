//Click Counter
let btn = document.querySelector("#btn")
let heading = document.querySelector("#heading")
let count = 0

btn.addEventListener("click", function(){
    count++
    heading.textContent = `Clicked ${count} times`
})

