/* jshint esversion: 6 */

var {color, position} = {
	color: "blue",
	name: "John",
	state: "New York",
	position: "Back"
};

console.log(color);
console.log(position);

function genObj() {
	return {
		color: "blue",
		name: "John",
		state: "New York",
		position: "Back"
	};
}

var {color:myColor, name:firstName} = genObj();

console.log(myColor);
console.log(firstName);


var [first,,,,fifth] = [1,2,3,4,5];

console.log(first);
console.log(fifth);

var people = [
		{
			name:"Daniele",
			age: 28,
			"email": "aaaaa@lsls.com"
		},
		{
			name:"Johne",
			age: 24,
			"email": "bbbbb@lsls.com"
		},
		{
			name:"Bill",
			age: 12,
			"email": "ccccc@lsls.com"
		}
	];

	var [,,billVar] = people;

	function logAge({age}) {
		console.log(age);
	}

	logAge(billVar);