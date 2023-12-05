/*

Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept argument one at a time and return a new function until all arguments are provided. Then, it should executes the original function with all arguments. Test the curry function with a function that adds two number.

*/

function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function (...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }
  
  // Example usage with a function that adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2)(3)); 
  console.log(curriedAdd(2, 3));  
  console.log(curriedAdd(2)(3, 4)); 
  
  