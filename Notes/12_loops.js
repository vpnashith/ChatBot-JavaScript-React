// while loop: 
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
};

// for loop:
for (let j = 0; j < 5; j++) {
    console.log(j);
};

// for...of loop:
let arr = [10, 20, 30]
for (let value of arr) {
    console.log(value);
};

// for...in loop:
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

