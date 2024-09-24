// async function

async function getData() {
  return "Rajnish Ranjan is my name";
}

// we will get promise when you will call this function because this is a async function
const dataPromise = getData();

console.log(dataPromise);

dataPromise.then((res) => console.log(res));


// will return a promise and lets test that 


const p = new Promise((resolve , reject) =>{
    resolve("Promise Resolved value");
})


async function getPromise (){
    return p;  // the data p will be as it is because it is a promise it need not to be wrapped inside anything 
}


const promiseCheck = getPromise ();

promiseCheck.then((res) => console.log(res));