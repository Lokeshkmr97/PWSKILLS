/*

Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.

*/

function factorial(num){
    if(num<0){
        return "Please input Positive Number";
    }
    if(num>=1){
        return num*factorial(num-1);
    }else{
        return 1;
    }
}

console.log("Factorial of a Number = ",factorial(5))
console.log("Factorial of a Number = ",factorial(7))
console.log("Factorial of a Number = ",factorial(9))
console.log("Factorial of a Number = ",factorial(11))
console.log("Factorial of a Number = ",factorial(-5))
console.log("Factorial of a Number = ",factorial(15))
