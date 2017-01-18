/* jshint esversion: 6 */
import { sumTwo, sumThree } from 'math/addition';

// or
import { sumTwo as addTwoNumbers } from 'math/addition';

// or
import * as addition from 'math/addition';
addition.sumTwo(2,3) // ecc..

console.log("2 + 3 = " , sumTwo(2,3));
console.log("2 + 3 + 4 = " , sumThree(2,3,4));
