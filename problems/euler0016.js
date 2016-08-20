/**
 * The solution to Project Euler problem 16.
 * @module problems/euler0016.js
 */
 
var BigInteger = require ( 'big-integer' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var number = new BigInteger ( 2 ).pow ( n );
    var numberString = number.toString ();
    var digitSum = 0;
    for ( var i = 0; i < numberString.length; ++i )
        digitSum += parseInt ( numberString [i] );
    
    return digitSum;
}

this.solve = function ()
{
    return process ( 1000 );
};
this.test = function ()
{
    return process ( 15 );
};