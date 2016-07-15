/**
 * The solution to Project Euler problem 6.
 * @module problems/euler0006.js
 */
 
// Perform the logic for solving the problem.
function process ( max )
{
    
    var sumOfSquares = 0;
    var squareOfSum = 0;
    for ( var i = 1; i <= max; ++i )
    {
        sumOfSquares += i * i;
        squareOfSum += i;
    }
    
    return Math.pow ( squareOfSum, 2 ) - sumOfSquares;
}

this.solve = function ()
{
    return process ( 100 );
};
this.test = function ()
{
    return process ( 10 );
};