/**
 * The solution to Project Euler problem 25.
 * @module problems/euler0025.js
 */

var Fibonacci = require ( '../utils/fibonacci' );

function process ( n )
{

    var f = new Fibonacci ();
    while ( f.current.toString ().length < n ) f.nextNumber ();
    return f.number;
}

this.solve = function ()
{
    return process ( 1000 );
};
this.test = function ()
{
    return process ( 3 );
};