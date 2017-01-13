/**
 * The solution to Project Euler problem 23.
 * @module problems/euler0023.js
 */

var sumOfProperDivisors = require ( './euler0021' ).d;

var MAX = 28123;

function process ( n )
{

    var answer = 0;
    var abundantNumbers = [];  
    var sumsOfAbundantNumbers = [];
    for ( var i = 12; i <= n; ++i )
    {
        if ( sumOfProperDivisors ( i ) > i )
            abundantNumbers.push ( i );
    }
    console.log ( "abundantNumbers" );
    for ( var i = 0; i < abundantNumbers.length; ++i )
    {
        for ( var j = i; j < abundantNumbers.length; ++j )
        {
            sumsOfAbundantNumbers.push ( abundantNumbers [i] +
                abundantNumbers [j] );
        }
    }

    sumsOfAbundantNumbers.sort ();

    var index = 0;
    var arrLength = sumsOfAbundantNumbers.length;

    for ( var i = 0; i <= n; ++i )
    {
        if ( i < sumsOfAbundantNumbers [index] )
            answer += i;
        else if ( i == sumsOfAbundantNumbers [index] )
            index++;
        else
        {
            index++;
            i -= 1; // go back one and check again
        }
        if ( index >= arrLength ) break;
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