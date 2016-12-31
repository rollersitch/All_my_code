'esversion: 6';
'use strict';

/*
const barker = (state) => ({
	bark: () => console.log('Woof, I am ' + state.name)
});

const driver = (state) => ({
	drive: () => state.position = state.position + state.speed
});

const killer = (state) => ({
	kill: () => console.log(state.name + " I'm killing")
});

barker({name: 'karo'}).bark();

const murderRobotDog = (name) => {
	let state = {
		name,
		speed: 100,
		position: 0
	};
	return Object.assign({}, barker(state), driver(state), killer(state));
};

murderRobotDog('sniffles').bark();
murderRobotDog('kylie').kill();
*/

var countDown = (initial) => {
	var count = initial || 0;
	return {
		getCount: () => {
			return count;
		},
		increment: () => {
			count++;
		},
		decrement: () => {
			count--;
		},
	};
};

var myCount = countDown(10);
//myCount.increment();
while(myCount.getCount()) {
	console.log(myCount.getCount());
	myCount.decrement();
}