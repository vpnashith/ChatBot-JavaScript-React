let s = new Set("Hello")
console.log(s)

// 
let s1 = new Set()
s1.add(1)
console.log(s1)

//
let s2 = new Set([1,2,3,4,5])
console.log(s2)
console.log(s2.has(3)) // true
console.log(s2.has(6)) // false
s2.delete(3)
console.log(s2.has(3)) // false
