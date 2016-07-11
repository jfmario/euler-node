/**
 * The solution to Project Euler problem 5.
 * @module problems/euler0005.js
 */
 
// Perform the logic for solving the problem.
function process ( high )
{
    
    var n = high;
    // create a list of numbers we need to divide to check divisibility
    var checks = [];
    for ( var i = high - 1; i > 1; --i )
    {
        
        // whether or not the number needs to be used to check
        var alreadyRepresented = false;
        for ( var j = 0; j < checks.length; ++j )
        {
            if ( checks [j]  % i == 0 )
            {
                
                alreadyRepresented = true;
                
                break;
            }
        }
        
        if ( !alreadyRepresented ) checks.push ( i );
    }
    
    while ( true )
    {
        
        n += high;
        
        var isAnswer = true;
        for ( var i = 0; i < checks.length; ++i )
        {
            if ( n % checks [i] != 0 )
            {
                
                isAnswer = false;
                
                break;
            }
        }
        
        if ( isAnswer ) return n;
    }
}

this.solve = function ()
{
    return process ( 20 );
};
this.test = function ()
{
    return process ( 10 );
};