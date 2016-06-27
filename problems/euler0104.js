/**
 * The solution to Project Euler problem #104.
 * @module problems/euler0101.js
 */
 
var Fibonacci = require ( '../utils/fibonacci' );
var pandigital = require ( '../utils/modules/pandigital' );
 
// Perform the logic for solving the problem.
function process ( lastOnly )
{
    
    var fibonacciSequence = new Fibonacci ();
    var fibNumber = 100000 // arbitrary start point
    
    fibonacciSequence.advanceTo ( fibNumber );
    var c = fibonacciSequence.current;
    
    while ( true )
    {
        // checking the last 9 is cheaper
        if ( pandigital.isPandigitalLast9 ( c ) )
        {
            // The test case is only worried about the last 9 digits.
            if ( lastOnly ) { return fibonacciSequence.number; }
            if ( pandigital.isPandigitalFirst9 ( c ) ) return fibonacciSequence.number;
        }
        c = fibonacciSequence.nextNumber ();
    }
}

this.solve = function ()
{
    // takes forever but gets the right answer
    return process ( false );
};
this.test = function ()
{
    return process ( true );
};