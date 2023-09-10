
// method 1
const obj={
    "StudentId":"S001",
    "Name":"Lokesh",


}


console.log('====================================');
console.log(obj);
console.log('====================================');

// Method 2
let emp=new Object();
console.log(emp)

emp.id=102
emp.name="Banty"
console.log('====================================');
console.log(emp);
console.log('====================================');


// Method 3 using Constructor

function Emp(i,n,s){
    this.id=i
    this.name=n
    this.salary=s
}

const e=new Emp(103,"Banty","25000")

console.log(e);


//  Access value from object

console.log(e.id)
console.log(e["name"])

delete e.salary
console.log(e)


// Object Method

const a={
    id:101,
    name:"Ram",
    age:25
}

const keys=Object.keys(a)  // always return in array form
console.log(keys)

const value=Object.values(a)
console.log(value)

let entries=Object.entries(a)
console.log(entries);

