/* jshint esversion: 6 */

function greet(greeting, name = "John") {
	console.log(greeting + ", " + name);
}

greet("hello");
greet("hello", "Bill");

function print(printer_f = () => console.log("default")) {
	printer_f();
}

print(function() {
	console.log("I'm printing me");
});

print();