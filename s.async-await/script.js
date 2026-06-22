/** 
 * what is async?
 * what is await?
 * how async await works behind the scenes?
 * Example of using async await 
 * error handling
 * Interviews
 * Async await VS Promise.then/.catch 
 * 
 * **/
const p = new Promise((resolve,reject) =>{
    resolve("Promise Resolved Value!!")
})

//async always return a promise
async function getData() {
    return p
}

const dataPromise = getData()
dataPromise.then((res) => console.log(res))


// //handling promise without async await 
// const q = new Promise((resolve, reject) =>{
//     resolve ("Promise q resolved value")
// })

// function getValue(){
//     q.then ((res) => console.log(res))
// }

// getValue()


//handling promise with async await 
const q1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve ("Promise q resolved value")
    }, 5000)
    
})

const q2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve ("Promise q resolved value")
    }, 10000)
    
})

async function handlePromise() {
    console.log("hello world")
    
   const val = await q1 //1st q1 function is called if it's timer is less than q2 it will execute and then q2
   console.log("1234")
   console.log(val)

//    const val = await q1
//    console.log("1234")
//    console.log(val)

   const val2 = await q2 //2nd q2 function is called if it's timer is less tham q1, it will wait for q1 timer to finish and then execute together 
   console.log("123444444")
   console.log(val2)
}
handlePromise()



// fetch github api example
const API_URL = "https://api.github.com/users/pradeepmalii"

async function fetchApi(){

   const data = await fetch(API_URL)
//    fetch() => Response.json() => jsonValue or result

   const jsonValue = await data.json() 

   console.log(jsonValue)


}
fetchApi()


// error handing in async await 
const Api_URL = "https://api.github.com/users/radeepmalii"

async function FetchApi(){

    try {
        const Data = await fetch(Api_URL)
        const JsonValue = await Data.json() 
        console.log(JsonValue)
    }
    
    catch (err) {
        console.log(err)
    }
}
FetchApi()


// traditional/old way of error handing in async await 
// const Api_URL = "https://api.github.com/users/radeepmalii"

// async function FetchApi(){

//         const Data = await fetch(Api_URL)
//         const JsonValue = await Data.json() 
//         console.log(JsonValue)

// }
// FetchApi().catch((err) => console.log(err))


// interview tip
// async is a keywrod used with function and async function are a different thing 
// await can only used inside async function 
//async await is jst a syntatical sugar over promise 