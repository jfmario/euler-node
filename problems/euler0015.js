/**
 * The solution to Project Euler problem #.
 * @module problems/euler0015.js
 */

// Perform the logic for solving the problem.
function process ( n )
{

    n += 1; // count extra edges

    /* make grid of nodes, where the bottom and right values are populated
        with 1 */
    var grid = [];
    for ( var i = 0; i < n - 1; ++i )
    {
        var thisRow = [];
        for ( var j = 0; j < n - 1; ++j ) thisRow.push ( 0 );
        thisRow.push ( 1 );
        grid.push ( thisRow );
    }
    var bottomRow = [];
    for ( var i = 0; i < n; ++i ) bottomRow.push ( 1 );

    grid.push ( bottomRow );

    // use prepopulated values to calculate options for all nodes
    for ( var i = n - 2; i >= 0; --i )
    {
        for ( var j = n - 2; j >= 0; --j )
        {
            grid [i] [j] = grid [ i + 1 ] [j] + grid [i] [ j + 1 ];
        }
    }

    return grid [0] [0];
}

this.solve = function ()
{
    return process ( 20 );
};
this.test = function ()
{
    return process ( 2 );
};
