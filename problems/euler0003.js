/**
 * The solution to Project Euler problem 3.
 * @module problems/euler0003.js
 */
 
var primes = require ( '../utils/modules/primes' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    var primeFactors = primes.getPrimeFactors ( n );
    return primeFactors [ primeFactors.length - 1 ];
}

this.solve = function ()
{
    return process ( 600851475143 );
};
this.test = function ()
{
    return process ( 13195 );
};