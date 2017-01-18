/* jshint esversion: 6 */

/*
function* graph() {
	let x = 0;
	let y = 0;
	while(true) {
		yield {x,y};
		x++; y++;
	}
}

function* graph2() {
	console.log("first call");
	let one = yield 1;
	console.log(one);
	let two = yield 2;
	console.log(two);
}

let graphGenerator2 = graph2();

let graphGenerator = graph();

for(let x of graphGenerator2) {
	console.log(x);
}
*/

function* fibonacciNumbers() {
	let x = 0;
	let y = 1;
	while(true) {
		yield x+y;
		let temp = y;
		y = x+y;
		x = temp;
	}
}

let fiboGen = fibonacciNumbers();

for(let i = 0; i < 100; i++) {
	console.log(fiboGen.next().value);
}