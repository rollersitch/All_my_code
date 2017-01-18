/* jshint esversion : 6 */

let first = [1,2,3];
let second = [4,5,6];

first.push(...second);

console.log(first);
console.log(...first);


let person = {
	name: "me",
	age: 28
};

function print(p) {
	console.log(p);
}

print(person);
//sprint(...person);