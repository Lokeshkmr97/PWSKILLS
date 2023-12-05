/*

Write a javaScript program that calculates the simple interest using the formula simple interest=(principal*rate*time)/100

*/

function calSimpleInterest(p,r,t){
    return (p*r*t)/100;
}

console.log("Simple Interest = ",calSimpleInterest(20000,5,3))