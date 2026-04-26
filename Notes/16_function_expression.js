// Function Expression
let add = function(a, b) {
    return a + b
}
console.log(add(5, 10)) // 15



// Arrow Function Expression
let multiply = (a, b) => a * b
console.log(multiply(5, 10)) // 50

// Function Expression with no parameters
let greet = () => "Hello, World!"
console.log(greet()) // Hello, World!

// Function Expression with one parameter
let square = x => x * x
console.log(square(5)) // 25

// Function Expression with multiple parameters
let power = (base, exponent) => Math.pow(base, exponent)
console.log(power(2, 3)) // 8 (2 raised to the power of 3)

// Function Expression with block body
let factorial = n => {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5)) // 120 (5 * 4 * 3 * 2 * 1)

// Function Expression with multiple parameters and block body
let max = (a,b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(max(5, 10)) // 10

