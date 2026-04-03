//Question 1
//var students = [];

//Question 2
//var students = new Array();

//Question 3
//var fruits = ["apple", "banana", "mango"];

//Question 4
//var numbers = [10, 20, 30, 40];

//Question 5
//var flags = [true, false, true];

//Question 6
//var mixed = ["Ali", 25, true];

//Question 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.writeln(
//     "Qualifications:<br><br>" +
//     "1) " + qualifications[0] + "<br>" +
//     "2) " + qualifications[1] + "<br>" +
//     "3) " + qualifications[2] + "<br>" +
//     "4) " + qualifications[3] + "<br>" +
//     "5) " + qualifications[4] + "<br>" +
//     "6) " + qualifications[5] + "<br>" +
//     "7) " + qualifications[6] + "<br>" +
//     "8) " + qualifications[7]
// );


// Question 8
// var names = ['Michael', 'John', 'Tony'];
// var score = [320, 230, 480];
// var maxScore = 500;

// var percentage1 = (score[0] / maxScore) * 100;
// var percentage2 = (score[1] / maxScore) * 100;
// var percentage3 = (score[2] / maxScore) * 100;

// document.writeln(`
//     ${names[0]} scored ${score[0]}. Percentage: ${percentage1.toFixed(2)}% <br>
//     ${names[1]} scored ${score[1]}. Percentage: ${percentage2.toFixed(2)}% <br>
//     ${names[2]} scored ${score[2]}. Percentage: ${percentage3.toFixed(2)}% <br>
// `);


// Question 9
//var colorNames = ['red', 'green', 'orange', 'yellow'];

//var newColor = prompt("Please enter a color:");

//var newColorTwo = prompt("Please enter a color:");

//Option a
//colorNames.push(newColor);

//Option b
//colorNames.unshift(newColor);

//Option c
// colorNames.unshift(newColor);
// colorNames.unshift(newColorTwo);

//Option d
//colorNames.shift();

//Option e
// var newColorIndex = prompt("Please enter a index number:");

// var newColor = prompt("Please enter a color:");

// colorNames.splice(newColorIndex, 0, newColor);


//Option f
// var newColorIndex = prompt("Please enter a index number:");

// var newColorDelete = prompt("Please enter remove the number of colors.");

// colorNames.splice(newColorIndex, newColorDelete);

//document.writeln("Updated colors: " + colorNames);

//Question 10
// var studentScore = [320, 230, 480, 120];
// studentScore.sort();

// document.writeln(studentScore)

//Question 11
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// selectedCities = cities.slice(2, 4);

// document.writeln(
//     `
//     Cities List: ${cities}<br>
//     Selected Cities: ${selectedCities}
//     `
// );

//Question 12
// var arr = ['This', 'is', 'my', 'cat'];
// var newArray = arr.join(' ');

// document.writeln(newArray);

//Question 13
// var devices = "keyboard,mouse,printer,monitor";

// var arr = devices.split(",");

// document.writeln(`Out:<br>${arr[0]}<br>
// Out:<br>${arr[1]}<br>
// Out:<br>${arr[2]}<br>
// Out:<br>${arr[3]}`);


//Question 14
// var devices = "keyboard,mouse,printer,monitor";

// var arr = devices.split(",");

// document.writeln(`Out:<br>${arr[3]}<br>
// Out:<br>${arr[2]}<br>
// Out:<br>${arr[1]}<br>
// Out:<br>${arr[0]}`);