let a = 5
let b= "5"

console.log(a == b) // true (loose equality - checks value after type coercion)
console.log(a === b) // false (strict equality - checks value and type)

console.log(a != b) // false (loose inequality - checks value after type coercion)
console.log(a !== b) // true (strict inequality - checks value and type)


a = 10
b = "abc"
console.log(a > b) // false (string is coerced to NaN, and any comparison with NaN is false)
console.log(a < b) // false (string is coerced to NaN, and any comparison with NaN is false)

