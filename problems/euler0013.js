/**
 * The solution to Project Euler problem 13.
 * @module problems/euler0013.js
 */

var BigInteger = require ( 'big-integer' );
 var fs = require ( 'fs' );

// Perform the logic for solving the problem.
function process ( n )
{

    var fileLines = fs.readFileSync (
        'data/euler0013.txt' ).toString ().split ( /\r?\n/ );
    var number = new BigInteger ();

    for ( var i = 0; i < fileLines.length; ++i )
        number = number.plus ( new BigInteger ( fileLines [i] ) );

    return number.toString ().slice ( 0, 10 );
}

this.solve = function ()
{
    return process ( 1 );
};
this.test = function ()
{
    return false;
};
