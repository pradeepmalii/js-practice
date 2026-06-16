console.log("Namaste")

setTimeout(function(){
    console.log("JavaScript")
}, 5000)

console.log("Season 2")


const cart = ["pen", "pencil", "book"]

api.createOrder(function(){

      api.proceedToPayment(function(){

         api.orderSummary(function(){

             api.updateWallet()

        })

    })

}) //these is a callback hell
//whenever i have a callback function and we pass it to some other function , we are giving the 
//control of our function to some other code and we dont know what's happening behind the scene now
//what if that function does not call our function or calls for mltiple times so it's risky 
//so these is a very important problem that we face while using callbacks 
//important - synchronization exist bcz callback exists 
//          - writing callback we face issues 
//            1.callback hell(callback inside callback, code becomes unmaintenable)
//            2.inversion of control 
