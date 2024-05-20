console.log("1");
// console.log("2");

setTimeout(function () {
  console.log("2");
}, 2000);
console.log("3");

// Define an async function
async function getUser() {
  try {
    // Await pauses until the fetch completes and then proceeds with the result
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json(); // Parsing the data as JSON
    console.log(data); // Displaying the user data
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

getUser(); // Calling the async function

//promise
// Creating a new Promise
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "John Doe", age: 30 },
        2: { name: "Jane Doe", age: 25 },
      };
      let user = users[userId];
      if (user) {
        resolve(user); // Resolve the Promise with the user data
      } else {
        reject(new Error("User not found")); // Reject the Promise with an error
      }
    }, 1000); // Simulating a network request with a delay
  });
}

// Using the Promise
getUser(1)
  .then((user) => console.log("User found:", user))
  .catch((error) => console.error("Error:", error));
