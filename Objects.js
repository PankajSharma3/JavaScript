//By object literals
let emp = {id:123,name:"Pankaj"}
console.log(emp.id);
console.log(emp.name);

//By creating instance of the object
let emp = new Object();
emp.id=123;
emp.name="Pankaj";
console.log(emp.id+'\n'+emp.name);

//By constructor
function Employee(id,name){
    this.id = id;
    this.name = name;
}
let a = new Employee(123,"Pankaj");
console.log(a.id+'\n'+a.name);
