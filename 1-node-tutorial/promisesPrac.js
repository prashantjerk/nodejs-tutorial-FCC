// This is a note to myself on how to use promises in JavaScript

// lets say there is a function that's called functionMain, and you want this function to run something 
// that is gonna take some time, and return something, on success you want to run another function which
// which takes return value of functionMain as a parameter, and on success of this second function you want
// to call another function called onSuccess() which logs success message to the log, and on failure it should
// call another function called onError() which logs the error message to the console


// this is the functionMain, when this is resolved it returns something as a promise
function functionMain() {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve('I came from functionMain. ❤️');
        console.log("Hi I came to functionMain().")
      }, 1000)
    })
  }
  
  function functionSomething(argument){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(argument);
        console.log("Hi i came to functionSomething().")
      }, 1000)
    })
  }
  
  // if any of the above two function is resolved 
  function onSuccess(data) {
    console.log(`${data}`);
    console.log("I came to onSuccess().");
  }
  
  function onError(error){
    console.log(`${error}`);
    console.log("Hi I have come to onError.")
  }
  
  functionMain()
  .then(functionSomething)
  .then(onSuccess, onError)
  .finally(console.log("hi this is me."))