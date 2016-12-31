var a = function() {
	return {
		obj: "available",
		obj2: "unallowed"
	};
};


var res = a();

console.log(res.obj.toString());


document.