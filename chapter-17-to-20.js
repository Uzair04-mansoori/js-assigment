// Q1: Empty multidimensional array
// let emptyMatrix = [[],[]];

// console.log(emptyMatrix);

// Q2: Matrix
// let matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];
// console.log(matrix);

// Q3: 1 to 10 Counting
// for (let i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

// Q4:
// let num    = prompt("Enter a number to show its multiplication table");
// let length = prompt("Enter length multiplication table");

// num    = parseInt(num);
// length = parseInt(length);

// document.write("<h3>Multiplication table of " + num + "</h3>");
// document.write("<p>Length " + length + "</p>");

// for (let i = 1; i <= length; i++) {
//   document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }


// Q5: Array items
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }

// for (let i = 0; i < fruits.length; i++) {
//   document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// Q6a: Counting 1 to 15
// let count = "";
// for (let i = 1; i <= 15; i++) { count += i + ", "; }
// document.write("<b>Counting:</b><br>" + count + "<br>");

// // Q6b: Reverse counting 10 to 1
// let rev = "";
// for (let i = 10; i >= 1; i--) { rev += i + ", "; }
// document.write("<b>Reverse counting:</b><br>" + rev + "<br>");

// // Q6c: Even 0 to 20
// let even = "";
// for (let i = 0; i <= 20; i += 2) { even += i + ", "; }
// document.write("<b>Even:</b><br>" + even + "<br>");

// // Q6d: Odd 1 to 19
// let odd = "";
// for (let i = 1; i <= 19; i += 2) { odd += i + ", "; }
// document.write("<b>Odd:</b><br>" + odd + "<br>");

// // Q6e: 2k to 20k
// let series = "";
// for (let i = 2; i <= 20; i += 2) { series += i + "k, "; }
// document.write("<b>Series:</b><br>" + series);

// Q7: Array mein search — item milа ya nahi
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// let found = false;
// let foundIndex = -1;

// for (let i = 0; i < A.length; i++) {
//   if (A[i] === order) {
//     found = true;
//     foundIndex = i;
//     break;
//   }
// }

// if (found) {
//   document.write(order + " is <b>available</b> at index " + foundIndex + " in our bakery");
// } else {
//   document.write("We are sorry. " + order + " is <b>not available</b> in our bakery");
// }

// Q8: Largest number in array
// let A = [24, 53, 78, 91, 12];

// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// document.write("Array items: " + A.join(",") + "<br>");
// document.write("The largest number is " + largest);

// Q9: Smallest number in array
// let A = [24, 53, 78, 91, 12];

// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.write("Array items: " + A.join(",") + "<br>");
// document.write("The smallest number is " + smallest);

// Q10: Multiples of 5 from 1 to 100
// let result = "";

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     result += i + ", ";
//   }
// }

// document.write(result);