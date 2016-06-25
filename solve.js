/**
 * Performs the solution of a Project Euler problem.
 * @file solve.js
 * @example node solve.js 101
 */

var problem = ( '00' + process.argv [2] ).slice ( -4 );
var E = require ( './problems/euler' + problem );

console.log ( E.solve () );