/* jshint esversion: 6 */

var salutation = "Hello";
var greeting = `               



${salutation},        World and other words randomly \n\nnewLine         `;

console.log(greeting);

function add(x,y) {
	console.log(`${x} + ${y} = ${x+y} `);
}

add(3,4);
add(7,19);

function tag(strings, ...values) {
	if(values[0] < 20) {
		values[1] = "awake";
	}
	else {
		values[1] = "sleepy";
	}
	return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log();