// these are the demo promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fail");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 Success");
//   }, 2000);

  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});
// these p1 , p2, p3 are array of promises
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {        // catch your error before the browser catches the error 
//     console.log(err);
//   });


Promise.allSettled([p1, p2, p3]) //this is the safest option 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {        // catch your error before the browser catches the error 
    console.log(err);
  });
