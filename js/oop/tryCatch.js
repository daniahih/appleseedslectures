function AddPositiveNumbers(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    throw new Error("Numbers must be positive");
  }
  return num1 + num2;
}
try {
  console.log(AddPositiveNumbers(1, 2));
} catch (e) {
  console.log("ya 7abibi bs arqam mojabeh ");
  console.log(e.message);
} finally {
  console.log("hi hussien");
}
console.log("dania");
