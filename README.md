# JavaScript: Gracefully Handling Null, Undefined, and Non-Numeric Inputs

This example shows a common JavaScript function and illustrates robust handling of various input types. The function `foo` takes a single argument `x` and performs different actions based on the type and value of `x`.

## Problem:

Functions in JavaScript can receive unexpected inputs.  If these inputs are not handled properly, they can lead to runtime errors or unexpected behavior. This example demonstrates a common problem and provides a solution.

## Solution:

The solution involves rigorous type checking and explicit return values for different input cases (null, undefined, non-numbers). This prevents errors and ensures predictable behavior, improving the overall robustness of the function.

## How to run the code:

1. Save the code as `bug.js` and `bugSolution.js`. 
2. Open your browser's developer console or use Node.js to run the file.  
3. Observe the output, which clearly demonstrates how different input types are handled.