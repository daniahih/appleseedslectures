// Users array to store user data
let users = [];

// Function to register a user
function registerUser(users, username, password) {
    // Validate the username
    if (username.length < 6 || /[^a-zA-Z0-9_]/.test(username)) {
        return 'Error: Username must be at least 6 characters long and contain only alphanumeric characters and underscores.';
    }

    // Validate the password
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 'Error: Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        return 'Error: Username already taken.';
    }

    // Add the user to the array
    users.push({ username: username, password: password });
    return 'User registered successfully.';
}

// Function to login a user
function loginUser(users, username, password) {
    // Find the user by username
    const user = users.find(user => user.username === username);

    // Check if user exists
    if (!user) {
        return 'Error: User does not exist.';
    }

    // Check if the password matches
    if (user.password !== password) {
        return 'Error: Incorrect password.';
    }

    // Successful login
    return `Welcome back, ${username}!`;
}

// Example usage:
console.log(registerUser(users, 'johndoe123', 'Password1!')); // User registered successfully.
console.log(registerUser(users, 'johndoe123', 'Password1!')); // Error: Username already taken.
console.log(loginUser(users, 'johndoe123', 'Password1!'));    // Welcome back, johndoe123!
console.log(loginUser(users, 'janedoe', 'Password1!'));       // Error: User does not exist.
