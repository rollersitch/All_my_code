function pairwise(arr,arg) {
	var pairArr = arr.slice(); // Local Copy

	function find(a,b,index) {
		var search = arg-b;

		if(pairArr.indexOf(search) !== -1 && pairArr.indexOf(search) !== index) {
			var total = index + pairArr.indexOf(search);
			pairArr.splice(index,1,NaN);
			pairArr.splice(pairArr.indexOf(search),1,NaN);
			return a+total;
		}
		return a;
	}

	return pairArr.reduce(find,0);
}

var a = pairwise([1,4,2,3,0,5],7);
console.log(a);
