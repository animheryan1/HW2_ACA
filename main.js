"use strict";


//Problem1
function isPrime(num) {
    if (num === 1) {
        return "No"
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "No"
        }
    }
    return "Yes"
}

console.log(isPrime(401));
console.log(isPrime(63));
console.log(isPrime(1));

//Problem2

function fibonacci(n, prevValues) {

    prevValues = prevValues || {0: 0, 1: 1};

    if (prevValues[n] >= 0) {
        return prevValues[n];
    }

    return prevValues[n] = fibonacci(n - 1, prevValues) + fibonacci(n - 2, prevValues);
}

console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(20));

//Problem3

function fibonacciUpTo(n) {
    let fibArr = [0, 1];
    while (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2] <= n) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr.toString();
}

console.log(fibonacciUpTo(7));
console.log(fibonacciUpTo(45));

//Problem4

function digitCheck(num) {
    if (num === 0) return "Can't calculate";
    let sum = 0;
    let mult = 1;
    while (num > 0) {
        sum += num % 10;
        mult *= num % 10;
        num = Math.floor(num / 10);
    }

    return mult % sum == 0 ? "Quotient is " + mult / sum : "Remainder is " + mult % sum;
}

console.log(digitCheck(1233));
console.log(digitCheck(5));
console.log(digitCheck(0));
console.log(digitCheck(455));

//problem9

function evenlyArray(a, b, num) {
    if (num === 1) return a;
    let result = [a];
    while (result[result.length - 1] < b) {
        let nextNum = Number((result[result.length - 1] + (b - a) / (num - 1)).toFixed(2));
        result.push(nextNum)
    }
    return result.toString();
}

console.log(evenlyArray(1, 5, 1));
console.log(evenlyArray(10, 100, 3));
console.log(evenlyArray(1, 5, 6));

//problem10

function secondBiggest(arr) {
    let max = arr[0];
    let secondMax = -Infinity;
    let idx = 0;
    let sIdx = 0;
    arr.forEach(function (value, i) {
        if (value > max) {
            secondMax = max;
            max = value;
            sIdx = idx;
            idx = i;
        }

        if (value < max && value > secondMax) {
            secondMax = value;
            sIdx = i;
        }
    });
    return sIdx;
}

console.log(secondBiggest([23, -98, 0, -456, 12, 8]));
console.log(secondBiggest([-60, 2, 43, -18, 5, -19, 36, 7, 56]));
console.log(secondBiggest([43, -18, 5, -19, 36, 7, 56]));


//or we can solve it using ready array functions

function secondBiggestReady(arr) {
    let copyArr = arr.slice();
    arr.sort((a, b) => a - b);
    return copyArr.lastIndexOf(arr[arr.length - 2]);
}

console.log(secondBiggestReady([23, -98, 0, -456, 12, 8]));
console.log(secondBiggestReady([-60, 2, 43, -18, 5, -19, 36, 7, 56]));
console.log(secondBiggestReady([43, -18, 5, -19, 36, 7, 56]));

//problem11

function padArray(arr, padAmount, repeat) {
    if(padAmount > arr.length) return "Invalid padding amount";
    for (let i = 0; i < repeat; i++) {
        arr.unshift(arr.slice(0, padAmount));
    }
    for (let i = 0; i < repeat; i++) {
        arr.push(arr.slice(-padAmount));
    }
    return arr.toString();
}

console.log(padArray([1, 2, 3, 4], 1, 3));
console.log(padArray([1, 2, 3, 4], 2, 1));
console.log(padArray([1], 1, 3));
console.log(padArray([1], 2, 3));