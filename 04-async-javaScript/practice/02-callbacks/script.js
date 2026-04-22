function fetchUser(id, callback){
    setTimeout(function(){
        let user  = {id: id,name: "Pradeep" }
        callback(user)
    }, 1000)
    }


    fetchUser(1, function(user){
        console.log("Got user:", user)
    })

    console.log("This run first!")


    //callback Hell
    fetchUser(1, function(user){
        fetchOrders(user.id, function(orders){
            fetchOderDetails(orders[0].id, function(details){
                fetchPayment(details.paymentId, function(payments){
                    console.log(payments)
                })
            })
        })
    })
