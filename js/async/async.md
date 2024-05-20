### Example without `async/await` (using Promises)

```javascript
// Function to fetch user data using Promises
function fetchUserData() {
  // Fetching data from a public API
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parsing JSON data from the response
    })
    .then((data) => {
      console.log("User data fetched with Promises:", data); // Displaying the user data
    })
    .catch((error) => {
      console.error("Failed to fetch user data:", error); // Handling errors
    });
}

fetchUserData(); // Call the function
```

In this version, the `fetch()` function returns a Promise. We handle the Promise by chaining `.then()` for success scenarios and `.catch()` for error handling. This can lead to deeper nesting as more asynchronous operations are added (known as "callback hell").

### Example with `async/await`

```javascript
// Async function to fetch user data
async function fetchUserDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json(); // Parsing JSON data from the response
    console.log("User data fetched with async/await:", data); // Displaying the user data
  } catch (error) {
    console.error("Failed to fetch user data:", error); // Handling errors
  }
}

fetchUserDataAsync(); // Call the async function
```

In the `async/await` version, the code is cleaner and more readable. By using `async` before the function declaration, we allow the use of `await` inside the function, which pauses the execution until the Promise settles, without blocking the main thread. Error handling is simplified with `try` and `catch`.

Both methods achieve the same result, but `async/await` makes the code more straightforward and easier to maintain, especially as complexity grows. This can be a great example to show your students the evolution of handling asynchronous operations in JavaScript.
