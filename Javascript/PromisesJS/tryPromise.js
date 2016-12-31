var pass1 = true;
var pass2 = true;
var pass3 = true;

var sleep = require('sleep');

var cleanTheRoom = function() {
	return new Promise(function(resolve, reject) {
		if(pass1) {
			sleep.sleep(Math.floor(Math.random() * 10));
			resolve('room cleaned');
		}
		else
			reject('room not cleaned');
	});
};

var removeGarbage = function(msg) {
	return new Promise(function(resolve,reject) {
		if(pass2) {
			sleep.sleep(Math.floor(Math.random() * 10));
			resolve(msg + ' garbage removed');
		}
		else
			reject(msg + ' garbage still here');
	});
};

var winInceCream = function(msg) {
	return new Promise(function(resolve,reject) {
		if(pass3) {
			sleep.sleep(Math.floor(Math.random() * 10));			
			resolve(msg + ' ice cream won');
		}
		else
			reject(msg + ' no icecream at all');
	});
};

/*cleanTheRoom().then(function(msg) {
	return removeGarbage(msg);
}).catch(function(msg) {
	console.log('error in pass1');
}).then(function(msg) {
	return winInceCream(msg);
}).then(function(msg) {
	console.log(msg + 'finished');
})/*.catch(function(msg) {
	console.log('error ' + msg);
})*/

Promise.race([cleanTheRoom(), removeGarbage(), winInceCream()]).then(function(msg) {
	console.log('all finished' + msg);
})