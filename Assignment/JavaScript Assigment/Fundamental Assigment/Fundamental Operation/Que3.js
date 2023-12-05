/*

Que. Differentiate between unary,binary and ternary operation in javascript. Give examples of each.

*/

/*

Unary Operation:
    A unary operation involves only one operand.
    Example: -x (negation), !isTrue (logical NOT), ++i (pre-increment), typeof variable (type of operator).


Binary Operation:
    A binary operation involves two operands.
    Example: x + y (addition), a * b (multiplication), c === d (strict equality), e || f (logical OR).


Ternary Operation:
    A ternary operation involves three operands. In JavaScript, the most common ternary operator is the conditional (or ternary) operator.
    Example: condition ? expr1 : expr2

*/

let x = 5;
console.log(-x);        // Unary negation: -5
console.log(!true);     // Unary logical NOT: false

let i = 3;
console.log(++i);       // Unary pre-increment: 4

let variable = "Hello";
console.log(typeof variable);  // Unary type of: "string"



let x1 = 5;
let y1 = 10;
console.log(x1 + y1);        // Binary addition: 15

let a = 3;
let b = 4;
console.log(a * b);        // Binary multiplication: 12

let c = "hello";
let d = "world";
console.log(c === d);       // Binary strict equality: false

let e = true;
let f = false;
console.log(e || f);        // Binary logical OR: true


let age = 20;
let isAdult = age >= 18 ? 'Yes' : 'No';
// Ternary conditional operator: If age is greater than or equal to 18, 'Yes' is assigned to isAdult; otherwise, 'No' is assigned.

