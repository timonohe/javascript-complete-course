const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => resolve(success),
      error => reject(error),
      opts
    );
  })
  return promise;
}

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  
  console.log(timerData, posData);
  // getPosition()
  //   .then(
  //     posData => {
  //       positionData = posData;
  //       return setTimer(2000);
  //     })
  //   .catch(error => {
  //     console.log(error);
  //     console.log('on we go...');
  //   })
  //   .then(data => console.log(data, positionData));
  setTimer(1000).then(() => console.log('Timer done!'));
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log(result);

// Promise.race executes all asyncronous Code in the Array but evaluate the result of the fastest method (other results will be ignored)
Promise.race([ getPosition(), setTimer(1000) ]).then(data => {
  console.log(data);
});

// Promise.all executes all asyncronous Code at the same time, wait until every Code was executed and then returns all data
Promise.all([ getPosition(), setTimer(1000) ]).then(promiseData => {
  console.log(promiseData);
});

// Promise.allSettled executes all asynchronous Code even if one Code fails
Promise.allSettled([ getPosition(), setTimer(1000) ]).then( promiseData => {
  console.log(promiseData);
});