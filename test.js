/**
 * Performs the test case of a Project Euler problem.
 * @file test.js
 * @example node test.js 101
 */

var problem = ( '00' + process.argv [2] ).slice ( -4 );
var E = require ( './problems/euler' + problem );

console.log ( E.test () );