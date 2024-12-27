function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle non-numeric input or throw error
  }
  return a + b; // Perform addition only if inputs are numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: null
console.log(foo("hello", 5)); // Output: 0