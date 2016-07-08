/**
 * The solution to Project Euler problem 4.
 * @module problems/euler0004.js
 */
 
var palindromes = require ( '../utils/modules/palindromes' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var min = Math.pow ( 10, n - 1 );
    var max = Math.pow ( 10, n ) - 1;
    var maxPalindrome = 0;
    for ( var i = max; i >= min; --i )
    {
        for ( var j = i - 1; j >= min; --j )
        {
            var product = i * j;
            if ( product > maxPalindrome )
            {
                if ( palindromes.isPalindrome ( product ) )
                    maxPalindrome = product;
            }
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