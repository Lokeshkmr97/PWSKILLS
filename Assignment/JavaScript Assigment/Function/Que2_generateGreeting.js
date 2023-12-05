/*

Que. Create a JavaScript function called generateGreeting that takes a name as an argument and return a personalized greeting message. Use this function to greet three different people.

*/

let generateGreeting = (name)=>{
    let startMsg="Hello ";
    let endMsg=" How can I help you ?";
    return startMsg + name + endMsg;
}

result1=generateGreeting("Ramesh");
console.log(result1);

result2=generateGreeting("Lokesh");
console.log(result2);

result3=generateGreeting("Kishan");
console.log(result3);