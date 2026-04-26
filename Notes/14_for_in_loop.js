let obj = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    }
}

for (let key in obj){
    console.log(key + ": " + obj[key])
}

console.log(obj["address"])