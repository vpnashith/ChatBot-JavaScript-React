let v = 30;
console.log(v, typeof v); // number

let v1 = String(v)
console.log(v1, typeof v1) // "30" string

// Coersion
let temp = 23 + ""
console.log(temp, typeof temp) // "23" string

let temp1 = temp - 5
console.log(temp1, typeof temp1) // 18 number (string is coerced to number for subtraction)

