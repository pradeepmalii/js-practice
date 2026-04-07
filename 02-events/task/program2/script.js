//Live Character Counter
let input = document.querySelector("#input")
let output = document.querySelector("#output")

input.addEventListener("input" , function(e){
    let remaining = Math.max(0, 100 - e.target.value.length)
    output.textContent = `${remaining} ${remaining === 1 ? "character" : "characters"} remaining`
})