let response = {
    success: true,
    payload: {
         products: [
            {id: 1, title: "laptop", price: 10, discount: null},
            {id: 2, title: "phone", price: 20, discount: 10},
            {id: 3, title: "tablet", price: 30, discount: 5}
         ]


    }
   
}

let products = response?.payload?.products ?? [] 

products.forEach(({title, price, discount}) => {
    let finalPrice = price ?? "price not available"
    let finalDiscount = discount ?? " no discount"

    if(discount !== null && discount !== undefined){
        finalDiscount = discount + "%"
    }

    console.log(`${title} - Rs${finalPrice} - Discount: ${finalDiscount}`)
})