/*

Write a JavaScript function called calculateTax that takes an income as an argument and return the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.

*/

let calculateTax = (income) =>{
    let tax;
    if (income >= 1000000){
        tax=(income*30)/100;
    }else if(income>500000 && income <1000000){
        tax=(income*20)/100;
    }else if(income >=250000 && income<=500000){
        tax=(income*5)/100;
    }else{
        tax=0;
    }
    return tax;
}

let res1=calculateTax(1500000);
console.log("Total Tax Paid = ",res1);

let res2=calculateTax(100000);
console.log("Total Tax Paid = ",res2);

let res3=calculateTax(600000);
console.log("Total Tax Paid = ",res3);

let res4=calculateTax(900000);
console.log("Total Tax Paid = ",res4);

