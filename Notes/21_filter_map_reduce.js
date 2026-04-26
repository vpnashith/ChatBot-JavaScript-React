// filter, map, reduce

let nums = [1,2,3,4,5,6]

console.log(nums.filter(num => num % 2 === 0)); // [2, 4, 6]

console.log(
    nums.filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((acc, num) => acc + num, 0)
);


let s = [1,2,3,4,5,6,7,8,9]
console.log(
    s.filter(num => {return num === 5 || num === 8} )
     .map(num => num + 1)
     .reduce((a,b)=> {return a+b}, 0)
);