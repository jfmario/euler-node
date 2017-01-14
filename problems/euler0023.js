/**
 * The solution to Project Euler problem 23.
 * @module problems/euler0023.js
 */

// Borrow function from problem 21
var sumOfProperDivisors = require ( './euler0021' ).d;

var MAX = 28123;

function process ( n )
{

    var answer = 0;
    var abundantNumbers = []; 
    // track sums of abundant numbers
    var sumsOfAbundantNumbers = {};
    // sum all numbers 1 to MAX
    for ( var i = 1; i < n; ++i ) answer += i;
    // find all abundant numbers
    for ( var i = 12; i <= n; ++i )
    {
        if ( sumOfProperDivisors ( i ) > i )
            abundantNumbers.push ( i );
    }
    // remove all sums of abundant numbers from the total
    for ( var i = 0; i < abundantNumbers.length; ++i )
    {
        for ( var j = i; j < abundantNumbers.length; ++j )
        {
            // find a sum of abundant numbers
            var abundantSum = abundantNumbers [i] +
                abundantNumbers [j];
            /* if it hasn't been seen and is less than MAX,
             * then remove it from total */
            if ( !sumsOfAbundantNumbers [abundantSum] && abundantSum < n )
            {
                // remember this number
                sumsOfAbundantNumbers [abundantSum] = true;
                answer -= abundantSum;
            }
        }
    }

    return answer;
}

this.solve = function ()
{
    return process ( MAX );
};
this.test = function ()
{
    return 1;
};