/**
 * The solution to Project Euler problem 24.
 * @module problems/euler0024.js
 */

var Permutations = require ( '../utils/permutations' );

function process ( n, max )
{

    var arr = [];
    for ( var i = 0; i <= max; ++i ) arr.push ( i );
    var count = 1;
    var p = new Permutations ( arr );

    while ( p.next () )
    {
        ++count;
        if ( count == n ) return p.current ().join ( '' ); 
    }
}

this.solve = function ()
{
    return process ( 1000000, 9 );
};
this.test = function ()
{
    return process ( 3, 2 );
};