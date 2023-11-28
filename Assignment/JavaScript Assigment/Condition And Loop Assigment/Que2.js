// Que-2 - Write a program that grades student basedon their marks

// if greater than 90 then A grade
// if between 70 and 90 then B grade
// if between 50 and 70 then C grade
// Below 50 then F grade


let grade=50

if(grade>90){
    console.log("Grade - A")
}else if(grade>70 && grade<=90){
    console.log("Grade - B")
}else if(grade>50 && grade<=70){
    console.log("Grade - C")
}else{
    console.log("Grade - F")
}