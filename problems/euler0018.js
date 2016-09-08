/**
 * The solution to Project Euler problem #18.
 * @module problems/euler0018.js
 */

var fs = require ( 'fs' );

// Perform the logic for solving the problem.
function process ( n )
{

    var fileLines = fs.readFileSync ( 'data/' + n ).toString ()
        .split ( /\r?\n/ );
    // console.log ( fileLines );

    var triangle = [];
    // build as an array of arrays of numbers
    for ( var i = 0; i < fileLines.length; ++i )
    {

        var thisRow = [];
        var splitLine = fileLines [i].split ( ' ' );
        for ( var j = 0; j < splitLine.length; ++j )
            thisRow.push ( parseInt ( splitLine [j] ) );

        if ( thisRow.length > 0 ) triangle.push ( thisRow );
    }

    // console.log ( triangle );
    // replace each value with the maximum possible path to it
    for ( i = 1; i < triangle.length; ++i )
    {
        for ( j = 0; j < triangle [i].length; ++j )
        {
            if ( j == 0 ) // first number in row
                triangle [i] [0] = triangle [i] [0] + triangle [ i - 1 ] [0];
            else if ( j == triangle [i].length - 1 ) // last
                triangle [i] [j] = triangle [i] [j] +
                    triangle [ i - 1 ] [ j - 1 ];
            else
            {

                // with path coming up and from the left
                var a = triangle [i] [j] + triangle [ i - 1 ] [ j - 1 ];
                // with path coming up and from the right
                var b = triangle [i] [j] + triangle [ i - 1 ] [j];

                // pick the largest of the two
                if ( a >= b ) triangle [i] [j] = a;
                else triangle [i] [j] = b;
            }
        }
    }
    // last line is funny because of the NaN line
    var lastLine = triangle [ triangle.length - 2 ];


    // return the highest number in the edited bottom row
    var maxValue = 0;
    for ( i = 0; i < lastLine.length; ++i )
    {
        if ( lastLine [i] > maxValue ) maxValue = lastLine [i];
    }

    return maxValue;
}

this.solve = function ()
{
    return process ( 'euler0018.txt' );
};
this.test = function ()
{
    return process ( 'euler0018_test.txt' );
};
