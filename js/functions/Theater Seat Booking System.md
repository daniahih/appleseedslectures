

### Theater Seat Booking System

**Objective:** Develop a system to manage seat bookings for a theater, handling reservations and cancellations with attention to specific seating rules.

**Functions to Implement:**
1. **initializeTheater(rows, columns)**: Create a theater layout with specified rows and columns, initializing all seats as available.
2. **bookSeat(theater, row, column)**: Attempt to book a specific seat. Seats cannot be booked if already taken or if doing so would leave a single empty seat between two booked seats.
3. **cancelBooking(theater, row, column)**: Cancel a booking if the seat is currently booked; handle edge cases where cancellation might violate the theater’s booking rules.
4. **printTheater(theater)**: Display the current booking status of the theater, showing booked and available seats.

**Key Features to Implement:**
- Ensure no single seats are left unbookable between two booked seats.
- Provide clear feedback for successful actions and errors (e.g., trying to book an already booked seat).

**Additional Challenge:**
- Implement a feature to automatically suggest the best available seat (based on proximity to the center of the row).
- Include advanced booking features like booking multiple adjacent seats.

**Example Usage:**
- Initialize a theater, book various seats, attempt to book seats that violate the rules, cancel bookings, and print the current state of the theater.

