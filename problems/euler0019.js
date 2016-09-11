/**
 * The solution to Project Euler problem 19.
 * @module problems/euler0019.js
 */

var moment = require ( 'moment' );

// Perform the logic for solving the problem.
function process ( n )
{

    var date = moment ( "1901-01-01" );
    var maxDate = moment ( "2000-12-31" );
    // number of 1st of month Sundays
    var answer = 0;

    while ( date.isBefore ( maxDate ) )
    {
        if ( date.day () == 0 ) ++answer;
        date.add ( 1, 'months' );
    }

    return answer;
}

this.solve = function ()
{
    return process ( 1 );
};
this.test = function ()
{
    return process ( 1 );
};
