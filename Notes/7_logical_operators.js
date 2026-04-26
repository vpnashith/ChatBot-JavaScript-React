let v1 = 5
let v2 = 10
console.log(v1 > v2 && v1 < v2) // false (both conditions must be true)
console.log(v1 > v2 || v1 < v2) // true (at least one condition must be true)
console.log(!(v1 > v2)) // true (negation of false is true) 

let isAdult = true
let hasID = false   
console.log(isAdult && hasID) // false (both conditions must be true)
console.log(isAdult || hasID) // true (at least one condition must be true)
console.log(!isAdult) // false (negation of true is false)

