//how setTimeout works behind the scenes in Browser to understand callback queue and event looping 
console.log("start1")

setTimeout(function cb(){
    console.log("callback")
}, 5000)

console.log("end1")


//how DOM API(like document.  .addEventListener) works behind the scenes in browser to understand callback queue and event looping 
console.log("start2")

document.getElementById("clickME")
.addEventListener("click", function cb(){
    console.log("callback")
})

console.log("end2")


//these is different from above 2 example 
//how fetch() works behind the scenes in browser to undersatnd callback queue and event looping 
console.log("start3")

setTimeout(function cbT(){
    console.log("CB setTimeout")
}, 5000)
fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix")
})

console.log("end3")