/**
 * The solution to Project Euler problem #101.
 * @module problems/0101-0150/euler0101.js
 */
 
var FunctionX = require ( '../../utils/functionX' );
 
// Test case function
function testFunc ( x ) { return x * x * x; }
// Actual function
function realFunc ( x )
{
    var a = 1;
    a -= x;
    a += Math.pow ( x, 2 );
    a -= Math.pow ( x, 3 );
    a += Math.pow ( x, 4 );
    a -= Math.pow ( x, 5 );
    a += Math.pow ( x, 6 );
    a -= Math.pow ( x, 7 );
    a += Math.pow ( x, 8 );
    a -= Math.pow ( x, 9 );
    a += Math.pow ( x, 10 );
    return a;
}
// Generate an optimum polynomial from a list of points and solve with x=n.
function optimumPolynomial ( n, pointList )
{
    
    var answer = 0;
    var num, den, currentY;
    for ( var i = 0; i < pointList.length; ++i )
    {
        
        num = 1;
        den = 1;
        
        currentY = pointList [i].y;
        // create the numerator and denominator of the function
        for ( var j = 0; j < pointList.length; ++j )
        {
            
            if ( j == i ) continue;
            
            num *= n - pointList [j].x;
            den *= pointList [i].x - pointList [j].x;
        }
        
        answer += ( num / den ) * currentY;
    }
    
    return answer;
}
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
    return process ( new FunctionX ( realFunc ), 14 );
};
this.test = function ()
{
    return process ( new FunctionX ( testFunc ), 5 );
};