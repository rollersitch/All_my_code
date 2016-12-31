/*
	This program shows the birthday paradox.
	Counterintuitevely, a small bunch of people (p)
	do make the probability to have at last two
	member to have the same birthday
 */

var P = 2;
var BigNumber = require('big-number');

console.log(BigNumber(5).plus(97).minus(53).plus(434).multiply(5435423).add(321453).multiply(21).div(2).pow(2).number.reverse().join(''));


function sFact(num)
{
    var rval = BigNumber(1);
    for (var i = 2; i <= num; i++)
        rval = rval.multiply(i);
    return rval;
}

function prob() {

		var a =	sFact(364);
		var b = sFact(365-P);
		var c = BigNumber(Math.pow(365,P-1));

		//console.log(a,b);
		console.log(a.div(c).div(b).minus(1).number.reverse());

		return a.div(c).div(b).add(-1).number.reverse().join('');
		/*
	return  (sFact(364).div(  sFact(365-P).multiply(Math.pow(365,P-1))  )  ).add(-1)
			.number.reverse().join('');
			*/
}


console.log(prob());