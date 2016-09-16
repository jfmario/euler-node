/**
 * The solution to Project Euler problem 20.
 * @module problems/euler0020.js
 */

var BigInteger = require ( 'big-integer' )

// Perform the logic for solving the problem.
function process ( n )
{

    var bi = new BigInteger ( n-- );
    while ( n > 0 )
        bi = bi.times ( n-- );
    var biString = bi.toString ();

    var digitSum = 0;
    for ( var i = 0; i < biString.length; ++i )
        digitSum += parseInt ( biString.charAt ( i ) );
    return digitSum;
}

this.solve = function ()
{
    return process ( 100 );
};
this.test = function ()
{
    return process ( 10 );
};
