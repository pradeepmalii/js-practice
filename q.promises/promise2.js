//consumer
const cart = ["pen", "pencil", "scale"]

createOrder(cart)  //return orderId
.then(function(orderId){
    console.log(orderId)
    // console.log(Promise)
//   proceedToPayment(orderId)
     return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})


//producer  - creating createOrder logic 
function createOrder(cart){

    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not vslid")
            reject(err)
        }

        //logic for createOrder
        const orderId = "1234" 
        if(orderId){
           setTimeout(function(){
              resolve(orderId)
           }, 5000)
            // resolve(orderId)
        }

    })



    return pr
}

function proceedToPayment(oderId){
    ///
    return new Promise(function(resolve, reject){
        resolve("Payment Successful")
    })
}

function validateCart(cart){
    return true

}

