/* jshint esversion: 6 */
class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	get full_name() {
		return this.name + ' ' +  this.surname;
	}

	what() {
		console.log('Hello my name is ' + this.full_name);
	}

	static wave(arg) {
		console.log("Said hello for " + arg);
	}
}

class Developer extends Person {
	constructor(name,surname, ole) {
		super(name,surname);
		this.ole = ole;
	}
	what() {
		super.what('called');
		console.log("and again");
	}
}

let me = new Person('Daniele','Pipitone');
console.log(me.name);
console.log(me.surname);
console.log(me.full_name);
me.what();
Person.wave('oooo');

let meme = new Developer('Rollersitch','developer', [1,2,true,{a: 4, b: 5}]);
console.log(meme.name);
console.log(meme.surname);
console.log(meme.full_name);
meme.what();
console.log(meme.ole[3].b);
Developer.wave('oooo');