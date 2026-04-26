let obj = {
    name: "Alice",
    age: 35,
    "annual income": 300000,
    years_of_experience: 10,
}

console.log(obj.name) // Alice
console.log(obj.age) // 35
console.log(obj["annual income"]) // 300000
console.log(obj.years_of_experience) // 10

// Adding a new property
obj.department = "Engineering"
console.log(obj.department) // Engineering

// Modifying an existing property
obj.age = 36
console.log(obj.age) // 36  

// Deleting a property
delete obj["annual income"]
console.log(obj["annual income"]) // undefined (property has been deleted)

//Complex object with nested objects and arrays
let employee = {
    name: "Bob",
    age: 28,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    }
}
console.log(employee.name) // Bob
console.log(employee.skills[1]) // React
console.log(employee.address.city) // Anytown

//Note
// console.log(employee.address.country) // undefined (country property does not exist in the address object),it throws an error if we try to access a property of undefined, so we can use optional chaining to safely access it without throwing an error.
console.log(employee.address?.country) // undefined (using optional chaining to safely access a non-existent property)