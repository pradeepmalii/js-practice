function x(){
    var i = 1
    setTimeout(function(){
      console.log(i)
    }, 10000)//here it does not mean that code is blocked for 5 sec , and will execute after 5 sec , it executs immediately and the browser handles timer separately 
    console.log("thes prints first")
}   
x()

//write a program where after 1 sec it prints 1 , after 2 sec it prints 2 and so on till 5

// function a(){
//     for(var i = 1; i <= 5; i++){
//         setTimeout(function (){
//             console.log(i)
//         }, i*1000)
//     }
// }
// a()//here code does not work as expected because var is function scoped and not block scope (for is a block) and beacause of closures. what actually happens is JS does not wait for the timer it executes the code immeditely and timer is handeled by browser,so till the time callback runs after 1 sec i has already become 6 as var is not block scope it does not create memory for i for every 5 iteration as it does not store the value , it stores the reference reason it is not block scope 

// function a(){
//     for(let i = 1; i <= 5; i++){
//         setTimeout(function (){
//             console.log(i)
//         }, i*1000)
//     }
// }
// a()//these works correctly as we used let and it is blocked scoped


//INTERVIEWER : solve the program using var only 

function c(){
    for(var i = 1; i <= 5; i++){
        function close(i){
        setTimeout(function(){
            console.log(i)
        }, i*1000)
    }
    close(i)
}
}
c()//earlier used ONE shared variable i . now close(i) creates a NEW execution context every iteration.the parameter i is a NEW LOCAL VARIABLE.So each function call gets its own separate copy