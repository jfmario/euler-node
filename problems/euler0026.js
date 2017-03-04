/**
 * The solution to Project Euler problem 26.
 * @module problems/euler0026.js
 */

var Big = require ( 'big.js' );

function process ( n )
{

    var num = new Big ( 1.0 );
    var bestDen = 0;
    var longestRepeat = 0;
    for ( var d = 2; d < n; ++d )
    {
        var den = new Big ( d + '.0' );
        var frac = num.div ( den );
        var fracStr = frac.toPrecision ( 50 );
    }
}

this.solve = function ()
{
    return process ( 1000 );
};
this.test = function ()
{
    return process ( 10 );
};