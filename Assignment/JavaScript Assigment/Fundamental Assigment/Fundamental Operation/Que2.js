// Que. Describe the categorization of operators in JavaScript based on their functionality. Provide examples for each category.

/*

Operators in JavaScript can be categorized based on their functionality. Here are some common categories 

1. Arithmetic Operators:
    Perform basic mathematical operations.
    Examples: + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ++ (increment), -- (decrement).

2. Assignment Operators:
    Assign values to variables.
    Examples: = (assignment), += (addition assignment), -=, *=, /=, %=.

3. Comparison Operators:
    Compare values and return a Boolean result.
    Examples: == (equal), === (strict equal), != (not equal), !== (strict not equal), > (greater than), < (less than), >= (greater than or equal), <= (less than or equal).

4. Logical Operators:
    Combine and manipulate Boolean values.
    Examples: && (logical AND), || (logical OR), ! (logical NOT).

5. Unary Operators:
    Operate on a single operand.
    Examples: - (negation), + (unary plus), ! (logical NOT).

6. Conditional (Ternary) Operator: 
    A shorthand for an if-else statement.
    Example: condition ? expr1 : expr2

7. Bitwise Operators:
    Perform operations on the binary representation of integers.
    Examples: & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift), >>> (unsigned right shift).

*/

// Examples :

// Arithmetic Operators:
let a = 5;
let b = 2;
console.log("Arithmetic Operators examples")
console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1


// Assignment Operators:

let x = 10;
x += 5; // equivalent to x = x + 5

// Comparison Operators
let a1 = 5;
let b1 = 10;

console.log(a1 === b1); // false
console.log(a1 !== b1); // true
console.log(a1 > b1);   // false

// Logical Operators

let isSunny = true;
let isWarm = false;

console.log(isSunny && isWarm); // false
console.log(isSunny || isWarm); // true

// Unary Operators:

let num = 5;
console.log(-num);   // -5
console.log(+num);   // 5
console.log(!isSunny); // false

// Conditional (Ternary) Operator:
let age = 20;
let isAdult = age >= 18 ? 'Yes' : 'No';

// Bitwise Operators:
let a2 = 5; // binary representation: 101
let b2 = 3; // binary representation: 011

console.log(a2 & b2); // 1 (bitwise AND)
console.log(a2 | b2); // 7 (bitwise OR)

