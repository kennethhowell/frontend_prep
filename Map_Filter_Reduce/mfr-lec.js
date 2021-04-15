// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = [];
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens); // [2, 4, 6, 8, 10]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log(evens); // [2, 4, 6, 8, 10]
