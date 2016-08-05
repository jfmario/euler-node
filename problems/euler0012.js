/**
 * The solution to Project Euler problem 12.
 * @module problems/euler0012.js
 */

// Perform the logic for solving the problem.
function process ( n )
{
    var num = 0;
    for ( var i = 1; true; ++i )
    {

        num += i;

        var divisors = 0;
        // all divisors will have a pair below the square root
        for ( var j = 1; j <= Math.sqrt ( num ); ++j )
        {
            if ( num % j == 0 )
                if ( j == Math.sqrt ( num ) ) ++divisors;
                else divisors += 2;
        }

        if ( divisors > n ) return num;
    }
}

this.solve = function ()
{
    return process ( 500 );
};
this.test = function ()
{
    return process ( 5 );
};
