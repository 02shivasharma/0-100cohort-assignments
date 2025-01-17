
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
const { calculateTimeAll } = require('./3-promise-all.js');
function wait1(t) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve()
    }, t * 1000);
  })
}

function wait2(t) {
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve()
    }, t * 1000);
  })
}

function wait3(t) {
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve()
    }, t * 1000);
  })
}

function calculateTime(t1, t2, t3) {
   const startTime = Date.now();
    
    return Promise.all([wait1(t1*1000), wait2(t2*1000), wait3(t3*1000)])
        .then((results) => {
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            return totalTime;

        });

}

function calculateTotalTime(t1, t2, t3) {
      const startTime = Date.now();

    return waitForT1(t1)
        .then(() => waitForT2(t2))
        .then(() => waitForT3(t3))
        .then(() => {
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            return totalTime;
        });
}

module.exports = calculateTime;
