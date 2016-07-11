/**
 * The solution to Project Euler problem 4.
 * @module problems/euler0004.js
 */
 
var palindromes = require ( '../utils/modules/palindromes' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var min = Math.pow ( 10, n - 1 ); // the lowest possible multiplier
    var max = Math.pow ( 10, n ) - 1; // the highest possible multiplier
    var maxPalindrome = 0;
    for ( var i = max; i >= min; --i )
    {
        for ( var j = i ; j >= min; --j ) // avoid duplication
        {
            var product = i * j;
            if ( product > maxPalindrome )
            {
                if ( palindromes.isPalindrome ( product ) )
                    maxPalindrome = product;
            }
            /* if the product is less then maxPalindrome, it is time to 
                skip to the next i */
            else break;
        }
    }
    
    return maxPalindrome;
}

this.solve = function ()
{
    return process ( 3 );
};
this.test = function ()
{
    return process ( 2 );
};