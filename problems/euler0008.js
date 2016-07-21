/**
 * The solution to Project Euler problem 8.
 * @module problems/euler0008.js
 */

var fs = require ( 'fs' );

// Perform the logic for solving the problem.
function process ( n )
{

    var largeNumberString = fs.readFileSync (
        'data/euler0008.txt' ).toString ().split ( /\r?\n/ ).join ( '' );
    // keep track of the largest product found yet
    var largestProduct = 0;

    for ( var i = 0; i < largeNumberString.length - n + 1; ++i )
    {

        var product = parseInt ( largeNumberString [i] );
        // if the starting point is a 0, don't even bother
        if ( product == 0 )continue;

        // look forward n digits
        for ( var j = 1; j < n; ++j )
        {
            product *= parseInt ( largeNumberString [ i + j ] );
            // 0's cannot be brought up by multiplying
            if ( product == 0 )break;
        }

        // see if there is a new record
        if ( product > largestProduct ) largestProduct = product;
    }

    return largestProduct;
}

this.solve = function ()
{
    return process ( 13 );
};
this.test = function ()
{
    return process ( 4 );
};
