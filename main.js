//Problem1
//Given a number. Print “odd” if the number is odd and “even” if it’s even.

function isOdd(num) {
    if (num % 2 === 0) {
        return "even"
    }
    return "odd"
}

console.log(isOdd(123));
console.log(isOdd(35));
console.log(isOdd(70));


//Problem2
// Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

function isDivisible(num1, num2) {
    return +(num1 % num2 === 0 || num2 % num1 === 0);
}

console.log(isDivisible(3, 14));
console.log(isDivisible(18, 2));
console.log(isDivisible(7, 21));


//Problem3
//Given two variables, which are the angles of a triangle. Find the third angle of the triangle.

function findThirdAngle(angle1, angle2) {
    return 180 - angle1 - angle2;
}

console.log(findThirdAngle(45, 90));
console.log(findThirdAngle(30, 30));
console.log(findThirdAngle(75, 25));


//Problem4
//Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

function numberSum(num) {
    return num + +("" + num + num) + +("" + num + num + num);
}

console.log(numberSum(3));
console.log(numberSum(17));
console.log(numberSum(100));

//Problem5
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

function lastDigitToFront(num) {
    let lastDig = num % 10;
    if (lastDig !== 0 && lastDig !== num) {
        return "" + lastDig + Math.floor(num / 10);
    }
    return num;
}

console.log(lastDigitToFront(367));
console.log(lastDigitToFront(1002));
console.log(lastDigitToFront(250));
console.log(lastDigitToFront(8));

//Problem6
//Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

function avg(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log(avg(45, -12, 0, 3, -15));
console.log(avg(7, 52, -23, 9, -81));

// Problem 7
// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function constructText(num, divisor, text) {
    if (num % divisor === 0) {
        if (!text) {
            return text + divisor;
        }
        return text + " and " + divisor;
    }
    return text;
}

function checkMultiple(num) {

    if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
        return num + " is a multiple of 3, 5 and 7.";
    }

    let returnText = constructText(num, 3, "");
    returnText = constructText(num, 5, returnText);
    returnText = constructText(num, 7, returnText);

    if (!returnText) {
        return num + " is not a multiple of 3, 5 or 7."
    }
    return num + " is a multiple of " + returnText + ".";
}

console.log(checkMultiple(21));
console.log(checkMultiple(35));
console.log(checkMultiple(13));
console.log(checkMultiple(420));
console.log(checkMultiple(24));
console.log(checkMultiple(15));
console.log(checkMultiple(49));

// Problem8
// Given an age, figure out whether someone is a baby or other age

function checkAge(number, indicator) {
    if (indicator === "months") {
        if (number < 12 && number > 1) {
            return "baby";
        }
        return "Enter Valid number";
    }
    if (number < 2) {
        return "toddler";
    }
    if (number < 12) {
        return "child";
    }
    if (number < 17) {
        return "teenager";
    }
    return "adult"
}

console.log(checkAge(8, "months"));
console.log(checkAge(45, "years"));
console.log(checkAge(3, "years"));
console.log(checkAge(13, "years"));

// Problem9
// Given three numbers. Sort them by the ascending order.
function swap(a,b){
    return [b,a]
}
function sortAsc(num1, num2, num3) {
    let temp;
    if (num1 > num2) {
        temp = num2;
        num2 = num1;
        num1 = temp;
    }
    if (num2 > num3) {
        temp = num3;
        num3 = num2;
        num2 = temp;
        if(num1 > num2){
            temp = num2;
            num2 = num1;
            num1 = temp;
        }
    }
    return "" + num1 + "," + num2 + "," + num3;
}

console.log(sortAsc(45, 26, 78));
console.log(sortAsc(-23, -456, 0));
console.log(sortAsc(100, 99, 5));

//Problem10
//Percentage marks obtained by a student in three exams are to be entered to a computer.

function isPass(grade1, grade2, grade3) {
    if (grade1 >= 40 && grade2 >= 40 && grade3 >= 40) {
        return "Passed";
    }

    if ((grade1 + grade2 + grade3 / 3) >= 50) {
        if (grade1 + grade2 + grade3 >= 119) {
            return "Passed";
        }
    }
    return "Not passed";
}

console.log(isPass(65, 70, 60));
console.log(isPass(10, 85, 75));
console.log(isPass(35, 25, 40));
console.log(isPass(20, 40, 40));

//Problem 11

function giveSign(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        return "The sign is +";
    }
    if (num1 < 0 && num2 < 0 && num3 < 0) {
        return "The sign is +";
    }
    if (num1 > 0 && num2 < 0 && num3 < 0) {
        return "The sign is +";
    }
    if (num1 < 0 && num2 > 0 && num3 < 0) {
        return "The sign is +";
    }
    return "The sign is -";
}


//Problem12

function findRoots(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    console.log((-b + Math.sqrt(D)) / (2 * a));
    console.log((-b - Math.sqrt(D)) / (2 * a));
}

//Problem13
let n;
let i = 0;
let j = 0;
if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
    j += 1;
}

//Problem14
function checkDigit(num, digit) {
    while (num > 0) {
        if (num % 10 === digit) {
            return "Yes";
        }
        num = Math.floor(num / 10);
    }
    return "No";
}

console.log(checkDigit(678, 8));

//Problem15
function reverseSomeDigits(number) {
    let str = number.toString();
    if (str.length < 2) {
        return number;
    }
    return +(str[str.length - 1] + str.slice(1, str.length - 1) + str[0]);
}

console.log(reverseSomeDigits(13));

//Problem17
// let objType = prompt("give shape");
// let side1 = prompt("give fist parameter");
// let side2 = prompt("give second parameter");

function calculateArea(objType, side1, side2) {
    if (side1 < 0 || side2 < 0) {
        console.log("Invalid input");
        return;
    }
    if (objType === "triangle") {
        console.log("Area of" + objType + "is" + side1 * side2 / 2);
    }
    if (objType === "rectangle") {
        console.log("Area of " + objType + " is " + side1 * side2);
    }
}

// calculateArea(objType, side1, side2);

//Problem18
function findDiff(num) {
    let smallest = 10;
    let biggest = 0;
    if (num === 0) {
        return 0;
    }
    while (num > 0) {
        let d = num % 10;
        if (d > biggest) {
            biggest = d;
        }
        if (d < smallest) {
            smallest = d;
        }
        if (d === 0) {
            smallest = 0;
        }
        num = Math.floor(num / 10);
    }
    return biggest - smallest;
}

console.log(findDiff(152));