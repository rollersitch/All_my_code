/* jshint esversion: 6 */

function createUser(props) {
	let {name,surname,age} = props;
	return {
		name: name || '',
		surname: surname || '',
		age: age || 0
	};
}

let newUSer = createUser({
	name: "Daniele",
	surname: "Pipitone"
});

console.log(newUSer.name);
console.log(newUSer.age);