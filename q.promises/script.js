//suppose we are creating an e-commerce website 

const cart = ["pen", "pencil", "scale"]

createOrder(cart) //returns oderId

proceedToPayment(orderId)
//these 2 above api are asynchronus , we don't know how much time it will take 
//and they are depended on each other (we can only proceedToPayment once we have createOrder)


//so how we handle these type of situation usnig callback
const cart = ["pen", "pencil", "scale"]

createOrder(cart, function(){
proceedToPayment(orderId)
})

//now it is responsibility of createOrder api to create order and then call our callback function back 
//once order is created
//but there is vrybig issue -> inversion of control
//control goes to createOrder api to callback proceedToPayment api which is risky 
//wew can not blindly trust createOrder api 
//passing callback function like these isn't reliable , we are giving control of our program to
//some other part of our code which we are not aware of 



//so how we handle these type of situation usnig promises
const promise = createOrder(cart)

//these creates empty object and later returns orderId

promise.then(function (OrderId){
    proceedToPayment(orderId)
})

// then these callback function attach to promises will be automatically called
//promises give us guarantee that it will call these proceedToPayment function whenever there is 
//data isnide const promises 