/**
 * The solution to Project Euler problem 1.
 * @module problems/euler0001.js
 */
 
// Perform the logic for solving the problem.
function process ( max )
{
    
    var total = 0;
    for ( var i = 1; i < max; ++i )
    {
        if ( ( i % 3 == 0 ) || ( i % 5 == 0 ) ) total += i;
    }
    
    return total;
}

this.solve = function ()
{
    return process ( 1000 );
};
this.test = function ()
{
    return process ( 10 );
};