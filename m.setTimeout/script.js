console.log("Start")

setTimeout(function cb() {
   console.log("callback")
}, 5000)

console.log("End")


//simulating a block of main thread for 10sec

let startDate = new Date().getTime()
let endDate = startDate;
while (endDate < startDate + 10000){
   endDate = new Date().getTime()
}

console.log("while expires")






console.log("Start1")

setTimeout(function cb() {
   console.log("callback")
}, 0)

console.log("End1")
////Start1   End1     callback is output 




console.log("Start")

function cb() {
   console.log("callback")
}

setTimeout(cb, 0)

console.log("End")