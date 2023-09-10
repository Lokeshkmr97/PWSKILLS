const arr=["lokesh","Kishan","Raju"]
console.log(arr)

let b=new Array("ba","Ca")
console.log(b);


// access data from Array
// using index

console.log(arr[1]);
arr[2]="Tinky"
console.log(arr);


// Array Method

arr.push(6)  // append new element into the array
console.log(arr);

arr.pop()  // remove from last element from the array

console.log(arr);

arr.shift() // remove starting element from array

console.log(arr);

arr.unshift("Lokesh")  // insert element in first postion in the element.

console.log(arr);

let c=arr.concat(b)

console.log(c);

arr.join('@')
console.log(arr);

arr.reverse()
console.log(arr);
 
let ind=arr.indexOf(3)

console.log(ind)

let arr1=[1,2,3,4,5,6];
console.log(arr1.slice(2,5))   // slice(starting_element,ending_element-1)


