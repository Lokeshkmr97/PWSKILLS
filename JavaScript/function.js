//  function 

function greet(){
    console.log("Hi There")
    console.log("How are you ?")
}

greet()

function sqrt(x){
    return x*x
}

let res=sqrt(5)
console.log("Square of number ",res);


//  default Parameter

function defaultFun(x,y=10){
    return x*y

}

let res1=defaultFun(10)
console.log(res1);
