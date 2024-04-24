function initializeTheater(rows, columns) {
    const theater = new Array(rows);
    for (let i = 0; i < rows; i++) {
        theater[i] = new Array(columns).fill(0); // 0 means unbooked, 1 means booked
    }
    return theater;
}

function bookSeat(theater, row, column) {
    // Basic boundary check
    if (row >= theater.length || column >= theater[row].length) {
        return 'Error: Seat position out of range.';
    }
    // Already booked check
    if (theater[row][column] === 1) {
        return 'Error: Seat is already booked.';
    }
    // Isolation check
    if (
        (column > 0 && theater[row][column - 1] === 1 && (column === 1 || theater[row][column - 2] === 0)) ||
        (column < theater[row].length - 1 && theater[row][column + 1] === 1 && (column === theater[row].length - 2 || theater[row][column + 2] === 0))
    ) {
        return 'Error: Booking this seat would isolate another seat.';
    }
    theater[row][column] = 1;
    return `Seat at row ${row + 1}, column ${column + 1} booked successfully.`;
}

function cancelBooking(theater, row, column) {
    if (theater[row][column] === 0) {
        return 'Error: Seat is not currently booked.';
    }
    // Future isolation check
    if (
        (column > 0 && theater[row][column - 1] === 1 && column < theater[row].length - 1 && theater[row][column + 1] === 1)
    ) {
        return 'Error: Cancelling this booking would isolate adjacent seats.';
    }
    theater[row][column] = 0;
    return `Booking at row ${row + 1}, column ${column + 1} cancelled successfully.`;
}

function printTheater(theater) {
    theater.forEach((row, index) => {
        console.log(`Row ${index + 1}: ${row.map(seat => seat ? 'Booked' : 'Available').join(', ')}`);
    });
}

// Example of usage:
const myTheater = initializeTheater(5, 10); // 5 rows and 10 columns
console.log(bookSeat(myTheater, 2, 5));
console.log(bookSeat(myTheater, 2, 5)); // Try to book an already booked seat
console.log(cancelBooking(myTheater, 2, 5));
console.log(printTheater(myTheater));
