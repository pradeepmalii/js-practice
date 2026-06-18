const GITHUB_API = "https://api.github.com/users/pradeepmalii"

const user = fetch(GITHUB_API)

console.log(user)

user.then(function(data){
    console.log(data)
})

//state of promise(promiseState) - tells in what state that promise is , initialy it will be 
//                                  in pending and we got our data it changes to fullfill state 
//result of promise(promiseResult) - store whatever data it returns

//rejected state - operation failed 

//WHAT IS PROMISES - a promise is an object representing the eventual completion or failure of
//                   an asynchronus operation

//why using promises is important - 



//PROMISE CHAINING
const cart = ["pen", "pencil", "scale"] //these is callback hell not recomended
                                       //below in promise chaining 
createOrder(cart, function(orderId){
    proceedTopayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updatewallentBalance()
        })
    })
})


createOrder(cart)
.then(function(orderId){
    return proceedTopayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    return updatewallentBalance(paymentInfo)
})


//PROMISE CHAINING USING arrow function
createOrder(cart)
.then((orderId) => proceedTopayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updatewallentBalance(paymentInfo))