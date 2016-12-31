var _log = console.log;


function name() {
	return function() {
		_log('hello');
		return 1;
		};
}

var num = name()

_log(num.toSource());
