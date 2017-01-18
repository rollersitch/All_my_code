/* jshint esversion: 6 */

let firstname = "Daniele";
let lastname = "Pipitone";
let move = "drive";

function go() {
	console.log('vroom');
}

let person = {firstname, lastname, go};

let person2 = {
	firstname,
	lastname,
	[move]: () => console.log('helooo')
};



console.log(person);
person.go();
console.log(person2);
person2.drive();
