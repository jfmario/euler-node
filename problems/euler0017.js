/**
 * The solution to Project Euler problem 17.
 * @module problems/euler0017.js
 */

var numberWords = require ( '../utils/modules/number-words' );

// Perform the logic for solving the problem.
function process ( n )
{

    var total = 0;
    for ( var i = 1; i <= n; ++i )
        total += numberWords.wordLength ( i );

    return total;
}

this.solve = function ()
{
    return process ( 1000 );
};
this.test = function ()
{
    return process ( 5 );
};
