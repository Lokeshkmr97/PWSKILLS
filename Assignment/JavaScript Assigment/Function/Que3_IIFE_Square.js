/*

Que. Create an IIFE (Immediately invoked Function Expression) that calculate the square of a number and immediately display the result.

*/

let res=(function(num){
    return num * num;
})(5)
console.log("Square of a number = ",res)