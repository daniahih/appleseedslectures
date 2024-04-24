
###  User Authentication System

**Objective:** Implement a user authentication system that handles registrations and logins using JavaScript functions.

**Functions to Implement:**
1. **registerUser(users, username, password)**: Registers a new user if the username and password meet specific criteria and the username isn't already taken.
2. **loginUser(users, username, password)**: Allows a user to log in if the username exists and the password matches.

**Key Features to Implement:**
- Validate username (minimum 6 characters, no special characters except `_`).
- Validate password (minimum 8 characters, must include uppercase, lowercase, number, and special character).s
- Check for unique usernames upon registration.
- Confirm username existence and password accuracy on login.

**Additional Challenge:** s
- Implement features such as simulated password hashing, account lock after multiple failed attempts, or user roles (e.g., admin, guest).

**Usage Example:**
- Register and log in users using the functions, handling various success or error scenarios appropriately.