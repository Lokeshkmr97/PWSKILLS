// Que-1. Explain the usage of ternary operator with syntax and write a program to check whether the number is even or 
// odd using the ternary operator

// Ternary operator is used to test the conditions similar to that of an if else block. It has three operands: condition, 
// statement if condition is true and statement if condition will be false

// Syntax
//  condition ? value if true : value if false;

// Examples

const num=30;
const res=num%2===0?"Even":"Odd";
console.log(res)