var _log = console.log

function add(x,y) {
	if ((typeof x && typeof y) !== 'number') {
		throw new Error('Params must be number.');
	}
	result = x+y;
	if (parseInt(result) !== result) {
		result = parseFloat(result.toFixed(1))
	}

	return result;
}

_log(add('o','g'))