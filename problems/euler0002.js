/**
 * The solution to Project Euler problem 2.
 * @module problems/euler0002.js
 */

var Fibonacci = require ( '../utils/fibonacci' );
 
// Perform the logic for solving the problem.
function process ( max )
{
    
    var fibonacci = new Fibonacci ();
    var total = 0;
    
    while ( fibonacci.current.lesser ( max ) )
    {
        if ( fibonacci.current.mod ( 2 ) == 0 )
            total += fibonacci.current;
        fibonacci.nextNumber ();
    }
    
    return total;
}

this.solve = function ()
{
    return process ( 4000000 );
};
this.test = function ()
{
    return process ( 100 );
};