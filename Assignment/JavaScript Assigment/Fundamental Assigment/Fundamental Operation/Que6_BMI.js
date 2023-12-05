/*

Write a JavaScript program to calculate the body Mass index (BMI) using the formula BMI=weight(kg)/height*height

*/

function calBMI(w,h){
    return w/(h*h);
}

console.log("BMI of a Body = ", calBMI(60,5.4))