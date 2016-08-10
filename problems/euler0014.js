/**
 * The solution to Project Euler problem 14.
 * @module problems/euler0014.js
 */
 
var Collatz = require ( '../utils/modules/collatz' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    // keep track of found collatz sequence lengths
    var cache = {};
    var largestSequenceLength = 0;
    var largestSequenceStart = 1;
    for ( var i = 2; i < n; ++i )
    {
        
        var collatz = i;
        var thisLength = 0;
        
        while ( collatz != 1 )
        {
            if ( cache.hasOwnProperty ( collatz ) )
            {
                
                thisLength += cache [collatz];
                collatz = 1
                
                break;
            }
            collatz = Collatz.collatzNext ( collatz );
            
            ++thisLength;
        }
        
        if ( thisLength > largestSequenceLength )
        {
            largestSequenceLength = thisLength;
            largestSequenceStart = i;
        }
        cache [i] = thisLength;
    }
    
    return largestSequenceStart;
}

this.solve = function ()
{
    return process ( 1000000 );
};
this.test = function ()
{
    return process ( 15 );
};