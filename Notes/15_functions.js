function greet(){
    console.log("Hello, World!")
}

function greet_with_name(name){
    msg = `Hello ${name}`
    return msg
}
greet() // Output: Hello, World!

console.log(greet_with_name("Nashith")) // Output: Hello Nashith