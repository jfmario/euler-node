/**
 * The solution to Project Euler problem 9.
 * @module problems/euler0009.js
 */
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    for ( var b = 2; b < n; ++b )
    {
        // a must be less than b
        for ( var a = 1; a < b; ++a )
        {
            // a + b + c must be n
            var c = n - b - a;
            // b must be less than c
            if ( c <= b ) break;
            if ( Math.pow ( c, 2 ) == ( Math.pow ( a, 2 ) + Math.pow ( b, 2 ) ) )
                return a * b * c;
        }
    }
    
    return 0; // no answer was found
}

this.solve = function ()
{
    return process ( 1000 );
};
this.test = function ()
{
    return process ( 12 );
};