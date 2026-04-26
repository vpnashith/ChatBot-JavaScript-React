let map = new Map()

map.set("name", "Alice")
map.set("age", 30)
console.log(map)

console.log(map.get("name")) // Alice
console.log(map.get("age")) // 30
console.log(map.get("nonexistent")) // undefined    \/ No error, just returns undefined

map.delete("age")
console.log(map.has("age")) // false

let map2 = new Map([["name", "Bob"], ["age", 25]])
console.log(map2)      
for (let [key, value] of map2) {
    console.log(`${key}: ${value}`)
}

map.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})
