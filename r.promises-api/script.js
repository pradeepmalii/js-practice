// four promise api whuch are majorly import
// 1. Promise.all()
// 2. Promise.allSettled()
// 3. Promise.race()
// 4. Promise.any()

//these are used to make parallel api calls 

//1. Promise.all() -> make parallel api calls and get the result
// it takes an array of promises as an input 
// if there are 3 promises or api call -> P1,P2,P3  , it will make the 3 parallel calls and get the result 
// P1 takes 3sec, P2 takes 1sec, P3 takes 2sec to resolve 
//SUPPOSE all of them successfully resolves  -> return array with values of all thes result [val1, val2, val3]
// result gives after 3sec bcz wait for all of api's to finish 
//hence all api calls are made parallely and shows the output parallely/same time only 
// SUPPOSE P2 gets fail after 1sec
//as soon as any of these promises get rejected promise.all() will through an error 
// so the output will be error exactly after 1sec, not wait for other promises
//it's like all or none 
//although remaning to does not get cancel , they may resolve or may rejected but output will be error


//2. Promise.allSettled()
// if there are 3 promises or api call -> P1,P2,P3  , it will make the 3 parallel calls and get the result 
// P1 takes 3sec, P2 takes 1sec, P3 takes 2sec to resolve 
//SUPPOSE all of them successfully resolves  -> return array with values of all thes result [val1, val2, val3]
// result gives after 3sec bcz wait for all of api's to finish 
//hence all api calls are made parallely and shows the output parallely/same time only
// SUPPOSE P2 gets fail after 1sec
// still wait for all promises to  settle, whether they are success or failure 
// return array with values of all thes result [val1, err2, val3]
// result gives after 3sec bcz wait for all of api's to finish, whether they are success or failure 

//ONLY DIFFERENCE BETWEEN Promise.all() and Promise.allSettled() is error handling 


//3.Promise.race()
// if there are 3 promises or api call -> P1,P2,P3  , it will make the 3 parallel calls and get the result 
// P1 takes 3sec, P2 takes 1sec, P3 takes 2sec to resolve 
//SUPPOSE all of them successfully resolves  -> after 1s value of first settle promise P2 will get(value not array)
//SUPPOSE if P2 fail it will return error after 1sec
// it return the first settled promise does not matter in resolved or rejected

// 4.Promise.any()
// // if there are 3 promises or api call -> P1,P2,P3  , it will make the 3 parallel calls and get the result 
// P1 takes 3sec, P2 takes 1sec, P3 takes 2sec to resolve 
// P2 takes 1sec so it will be settled first , if it gets resolved , it will immediately return value after 1sec
// so now P1 and P3 conitnue running till they settled but there response will not be printed/will be ignored
// Promise.any() does not cancel the remaining promises. They continue running, but their results/rejections are ignored once the first fulfillment occurs.
// supppose P2 gets rejected and error occurs after 1sec it does return error and waits for P3 to settle and if P3 resolved 
// it immediately return value of P3 after 2sec
// if both rejected waits for 3rd 
// If all promises fail (reject), then Promise.any() waits until every promise has rejected and then rejects with an AggregateError.
// It rejects with an AggregateError, and the rejection reasons are available in the errors array.
// rejection is within array
// // it return the first resolved promise



// settled means result got but it's either resolved/success/fullfilled  OR   reject/failure/rejected

//PROMISE.ALL()
// const P1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const P2 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P2 Success"),1000)
//     // setTimeout(() => reject("P2 Fail"),1000)
// })

// const P3 = new Promise((resolve, reject) =>{
//     // setTimeout(() => resolve("P3 Success"),2000)
//     setTimeout(() => reject("P3 fail"),2000)
// })

// Promise.all([P1,P2,P3])
// .then (res => {
//     console.log(res)
// })
// .catch((err) =>{
//      console.error(err)   
// })





// PROMISE.ALLSETTLED()
// const P1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const P2 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P2 Success"),1000)
//     // setTimeout(() => reject("P2 Fail"),1000)
// })

// const P3 = new Promise((resolve, reject) =>{
//     // setTimeout(() => resolve("P3 Success"),2000)
//     setTimeout(() => reject("P3 fail"),2000)
// })

// Promise.allSettled([P1,P2,P3])
// .then (res => {
//     console.log(res)
// })
// .catch((err) =>{
//      console.error(err)   
// })
 

// // PROMISE.RACE()
// const P1 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P1 Success"), 3000);
// })

// const P2 = new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("P2 Success"),1000)
//     // setTimeout(() => reject("P2 Fail"),1000)
// })

// const P3 = new Promise((resolve, reject) =>{
//     // setTimeout(() => resolve("P3 Success"),2000)
//     setTimeout(() => reject("P3 fail"),2000)
// })

// Promise.race([P1,P2,P3])
// .then (res => {
//     console.log(res)
// })
// .catch((err) =>{
//      console.error(err)   
// })



// PROMISE.ANY()
const P1 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("P1 fail"), 3000);
})

const P2 = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("P2 Success"),1000)
    setTimeout(() => reject("P2 Fail"),1000)
})

const P3 = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("P3 Success"),2000)
    setTimeout(() => reject("P3 fail"),2000)
})

Promise.any([P1,P2,P3])
.then (res => {
    console.log(res)
})
.catch((err) =>{
     console.error(err) 
     console.log(err.errors)  
})