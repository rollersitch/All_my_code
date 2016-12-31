/* jshint esversion: 6 */
function perm(num) {
	var arr = (num + '').split('');
	var permutations = [];
	//function isEven(n) { return n%2 === 0 ;}
	function swap(a,b) { var temp = arr[a]; arr[a] = arr[b]; arr[b] = temp;}

	function generate(n) {
		if(n === 1) {
			permutations.push(arr.join());
		}
		else {
			for(var i=0; i != n; ++i) {
				generate(n-1);
				swap(n%2 ? 0 : i,n-1);
			}
		}
	}

	generate(arr.length);

	// Added for the exercise purpose
	var comb = [];
	for(var i= 0; i< permutations.length; i++) {
		comb.push(permutations[i].split(',').join(''));
	}
	
	var final = comb.filter(function(item) {
		var regex = /(.)\1+/g;
		return !item.match(regex);
	});
	
	return final.length;
}

var arr = 'abab';
console.log(perm(arr));