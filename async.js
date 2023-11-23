console.log("Hello")

function name(str) {
    console.log(str)
}

name("Paul")

let nameDelayed = setTimeout(() => {
    return "David"
}, 3000);

name(nameDelayed)

/* 
    ? Promises
    * an object that may produce a singular value in the future

    ? Three States
    * Pending (unfinished)
    * Fulfilled (complete value result)
    * Rejected (error)
    
    * Promises allow other code to execute without having to wait for their completion
*/

function promiseFx() {
    return new Promise((resolve, reject) => {
        // resolve("Promise resolved")
        reject("Promise rejected")
        // setTimeout(() => {
        //     resolve("After 3 seconds it resolves")
        // }, 3000);
    })
}

// console.log(promiseFx())

// promiseFx()
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err))

console.log("Code after the promise")

/* 
    ? Asynchronous Functions
    * introduced in ES7
    * alternative to writing promises
    * a function that returns a promise object
    * allows us to resolve or reject a promise
    
    ? Syntax
    async function myFx() { }
    const myFx = async function() { }
    const myFx = async () => { }
*/

function gardenFunction() {
    return 2
}

console.log(gardenFunction())

async function asyncFxSample() {
    return 2
}

// ? How do we get values out of asyncs then?!?!?!

console.log(asyncFxSample())

// use a resolver

asyncFxSample().then(num => console.log(num))

/* 
    ? Await Keyword
    * can be utilized only inside of an async function
    * tells JS we must wait on promise returning fx before moving on
*/

async function start() {
    let result = await asyncFxSample()
    console.log(result)
}

start()