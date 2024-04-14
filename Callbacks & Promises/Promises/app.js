// Promises:
// An alternative way to do asynchronus tasks compared to something like callbacks.
// Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.
// Think of promise as representing a value that may be available now, later or never.

// Promises have three states:
// 01)Pending: Initial state, before the operation completes or fails.
// 02)Fulfilled: The operation completed successfully, and the promise has a value.
// 03)Rejected: The operation failed, and the promise has a reason for the failure.

//Examples:

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Assuming success in fetching data from API.
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data!");
    }
  }, 2000);
});

// Using the promise
myPromise
  .then((result) => {
    console.log(result); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // Output if rejected: Failed to fetch data!
  });

//Fetching data with promise
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Using the fetchData function
fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


// Handling Multiple Promises:
const promise1 = new Promise(resolve => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise(resolve => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  Promise.all([promise1, promise2])
    .then(results => console.log(results))
    .catch(error => console.error(error)); 

//  Promise.all is used to handle multiple promises concurrently. 
//  It waits for all promises to settle (either fulfill or reject) and then resolves with an array of results.
//  If any of the promises reject, the whole chain is rejected.