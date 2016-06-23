/**
 * The solution to Project Euler problem #.
 * @module problems/0101-0150/euler0101.js
 */
 
var FunctionX = require ( '../../utils/functionX' );
 
// Perform the logic for solving the problem.
function process ( functionX, max )
{
    
    var sum = 0;
    // generate a list of correct points
    var points = functionX.generatePoints ( max );
    for ( var i = 1; i <= max; ++i )
    {
        for ( var j = 1; j <= max; ++j )
        {
            // apply polynomial interpolation
            var jSolution = optimumPolynomial ( j, points.slice ( 0, i ) );
            // if result is the FIT (first incorrect term)
            if ( jSolution != points [j-1].y )
            {
                
                sum += jSolution;
                
                break;
            }
        }
    }
    
    return sum;
}

this.solve = function ()
{
    return 1;
};
this.test = function ()
{
    return 1;
};