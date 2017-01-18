/* jshint esversion: 6 */

import _ from 'lodash';

function component() {
	let element = document.createElement('div');

	element.innerHTML = _.map(['Hello','webpack'], item => item + ' ');

	return element;
}

document.body.appendChild(component());