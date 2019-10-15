/*This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates
and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.*/

function minNum(arr) {
    if (!arr) return 0;

    var newArr = arr.filter((value) => value > 0).sort(function (a, b) {
        return a - b
    });

    if (newArr.length === 0) return 0;

    var maxValue = newArr[newArr.length - 1];

    if (maxValue === 1) {
        return 2;
    } else {
        for (var i = 1; i < maxValue; i++) {
            if (newArr.indexOf(i) === -1) {
                return i;
            }
        }
        return maxValue + 1
    }
}

console.log(minNum([-7, -8, -9, -11, -12]));
