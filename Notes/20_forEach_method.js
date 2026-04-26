let arr = [1,2,3,4,5]
// forEach method
arr.forEach(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});


arr.forEach(element => {
    console.log(`Element: ${element}`);
});

arr.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

arr.forEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});
