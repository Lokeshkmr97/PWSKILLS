// Que-3 - What are Loops. and what do we need them ? Explain different types of loops with their syntax and an example

// Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false. A loop will continue running until the defined condition returns false.

// There are four types of loops in JavaScript.

// for loop
// while loop
// do-while loop
// for-in loop

//  Syntax

// for (initialization; condition; increment)  
// {  
//     code to be executed  
// }  

// while (condition)  
// {  
//     code to be executed  
// }  

// do{  
//     code to be executed  
// }while (condition); 

// for i in object{
//     code to be executed
// }

// Example of loops
console.log("Print using For Loop")
for(let i=1;i<=10;i++){
    console.log(i)
}

console.log("Print using While Loop")
let tab=5
while(tab<=100){
    console.log(tab)
    tab+=5
}

console.log("Print using do While Loop")
let table=10
do{
    console.log(table)
    table+=10
}while(table<=100)

console.log("Print using for in Loop")

let personName=['Ajay','Vijay','Sanjay','Ramesh','Kishan']
for (ind in personName){
    console.log(personName[ind])
}