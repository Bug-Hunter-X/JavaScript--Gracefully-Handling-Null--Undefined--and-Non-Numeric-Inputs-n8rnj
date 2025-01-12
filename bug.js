function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x === undefined) {
    return -1; // Handle undefined case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-number case
  } else {
    return x * 2; //Normal case
  }
}

console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo('hello')); // Output: NaN
console.log(foo(5));     // Output: 10
console.log(foo(0));     // Output:0
console.log(foo(NaN));    //Output: NaN