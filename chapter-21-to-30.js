// Q:1
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// var fullName = firstName + " " + lastName;

// alert("Hello " + fullName);


// Q:2
// var mobile = prompt("Enter your favorite mobile model");

// document.write("My favorite phone is: " + mobile + "<br>");
// document.write("Length of string: " + mobile.length);


// Q:3
// var country = "Pakistani";

// document.write("String: " + country + "<br>");
// document.write("Index of 'n': " + country.indexOf("n"));


// Q: 4
// var text = "Hello World";

// document.write("String: " + text + "<br>");
// document.write("Last index of 'l': " + text.lastIndexOf("l"));


// Q: 5
// var word = "Pakistani";

// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3));


// Q: 6
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello " + fullName);


// Q: 7
// var city = "Hyderabad";

// var replaceCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replaceCity);


// Q: 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replaceAll("and", "&");

// document.write(newMessage);


// Q: 9
// var str = "472";

// var num = Number(str);

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br><br>");

// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);


// Q: 10
// var userInput = prompt("Enter text");

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + userInput.toUpperCase());


// Q: 11
// var userInput = prompt("Enter text");

// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("Title case: " + titleCase);


// Q: 12
// var num = 35.36;

// var result = num.toString().replace(".", "");

// document.write(result);


// Q: 13
// var username = prompt("Enter username");

// if(username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     alert("Please enter a valid username");
// } else {
//     alert("Valid username");
// }


// Q: 14
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want?").toLowerCase();

// if(bakery.includes(userInput)) {
//     alert(userInput + " is available in our bakery");
// } else {
//     alert("We are sorry. " + userInput + " is not available");
// }


// Q: 15
// var password = prompt("Enter password");

// if(password.length >= 6 && isNaN(password.charAt(0)) && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
//     alert("Valid password");
// } else {
//     alert("Invalid password");
// }


// Q: 16
// var university = "University of Karachi";

// var arr = university.split("");

// for(var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }


// Q: 17
// var userInput = prompt("Enter text");

// var lastChar = userInput.charAt(userInput.length - 1);

// document.write("Last character: " + lastChar);


// Q: 18
// var text = "The quick brown fox jumps over the lazy dog";

// var count = text.toLowerCase().split("the").length - 1;

// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the'");