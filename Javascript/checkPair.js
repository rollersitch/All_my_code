function checkPair(arr, arg) {
	for(var i=0; i< arr.length; i++) {
		for(var j=i+1; j< arr.length; j++) {
			if(arr[i] + arr[j] === arg)
				return true;
		}
	}
	return false;
}

function checkLinear(arr,arg) {
	var i=0;
	var j = arr.length-1;
	while(i!==j) {
	
		if(arr[i]+arr[j] > arg) {
			j--;
			continue;
		}
		if(arr[i] + arr[j] < arg) {
			i++;
			continue;
		}
		
		return true;
	}
	return false;
}

var arr = [0,3,4,5];
var arg = 8;

console.log(checkPair(arr,arg));
console.log(checkLinear(arr,arg));


/** MORE EFFICIENT SOLUTION */

/* first approach --> Object Literal
var myHashSet =  {
	mySet : [],

	hash: function(item) { return item << 2;},

	add: function(item) {var index = this.hash(item); this.mySet[index] = item;},
	get: function(item) {var index = this.hash(item); return this.mySet[index];}
};

function checkIfNotSorted(arr,arg) {
	for(var i=0; i< arr.length; i++ ) {
		if(myHashSet.get(arr[i]) !== undefined)
			return true;
		myHashSet.add(arg-arr[i]);
	}
	return false;
}
*/

/* 2nd Approach ----> Function building a proper Object and returning is public interface
*  Private data is provided by closure.
*  Of course this has to be *inside* the function or it'd be out of scope
function myHashSet() {
	var mySet = [];

	return {

		hash: function(item) { return item << 2;},

		add: function(item) {var index = this.hash(item); mySet[index] = item;},
		get: function(item) {var index = this.hash(item); return mySet[index];}
	};
}
*/
function checkIfNotSorted(arr,arg) {
	function myHashSet() {
		var mySet = [];

		return {

			hash: function(item) { return item << 2;},

			add: function(item) {var index = this.hash(item); mySet[index] = item;},
			get: function(item) {var index = this.hash(item); return mySet[index];}
		};
	}

	var myHashset = myHashSet();
	for(var i=0; i< arr.length; i++ ) {
		if(myHashset.get(arr[i]) !== undefined)
			return true;
		myHashset.add(arg-arr[i]);
	}
	return false;
}


var arrNotSorted = [0,5,2,1,21,5,2,0,0,0,2,7];
console.log(checkIfNotSorted(arrNotSorted,arg));
