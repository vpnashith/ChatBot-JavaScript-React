function Employee(name, age) {
    this.name = name;
    this.age = age;

    this.getDetails = function() {
        return "Name: " + this.name + ", Age: " + this.age;
    }
}

var emp1 = new Employee("Alice", 30, );
var emp2 = new Employee("Bob", 25);

console.log(emp1.getDetails()); // Output: Name: Alice, Age: 30
console.log(emp2.getDetails()); // Output: Name: Bob, Age: 25