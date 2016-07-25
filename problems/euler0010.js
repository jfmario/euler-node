/**
 * The solution to Project Euler problem 10.
 * @module problems/euler0010.js
 */
 
var BigInteger = require ( 'big-integer' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var total = BigInteger ( 0 );
    for ( var i = 1; i < n; ++i )
    {
        if ( BigInteger ( i ).isPrime () )
        {
            total = total.plus ( i )
        }
    }
    
    return total.toString ();
}

this.solve = function ()
{
    return process ( 2000000 );
};
this.test = function ()
{
    return process ( 10 );
};