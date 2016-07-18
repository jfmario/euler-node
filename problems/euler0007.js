/**
 * The solution to Project Euler problem 7.
 * @module problems/euler0007.js
 */
 
var BigInteger = require ( 'big-integer' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    var primeCount = 0;
    for ( var i = 1; primeCount < n; ++i )
    {
        if ( BigInteger ( i ).isPrime () )
        {
            ++primeCount;
            if ( primeCount == n ) return i;
        }
    }
}

this.solve = function ()
{
    return process ( 10001 );
};
this.test = function ()
{
    return process ( 6 );
};