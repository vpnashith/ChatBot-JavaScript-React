// Methods in JavaScript are functions that are properties of an object. 
// They allow objects to perform actions and manipulate their own data.
//  Here's an example of how to define and use a method in a JavaScript object:
let employee = {
    name: "John",
    age: 30,
    salary: 50000,
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};

employee.greet(); // Output: Hello, my name is John


// this keyword refers to the current object that the method is being called on.
let employee_2 = {
    name: "Jacob",
    age: 30,
    salary: 54000,
    
    compare: function(otherEmployee){
        if(this.salary > otherEmployee.salary){
            console.log(this.name + " has a higher salary than " + otherEmployee.name);
        } 
    }
};

employee_2.compare(employee); // Output: Jacob has a higher salary than John