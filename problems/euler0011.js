/**
 * The solution to Project Euler problem 11.
 * @module problems/euler0011.js
 */
 
var fs = require ( 'fs' );
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var fileLines = fs.readFileSync (
        'data/euler0011.txt' ).toString ().split ( /\r?\n/ );
    var grid = [];
    var largestNumber = 0;
    
    // read the numbers from the file and store them in a grid
    for ( var i = 0; i < fileLines.length; ++i )
    {
        
        grid.push ( [] );
        
        var splitLine = fileLines [i].split ( /\s/ );
        for ( var j = 0; j < splitLine.length; ++j )
        {
            var num = parseInt ( splitLine [j] );
            grid [i].push ( num );
        }
    }
    
    // look at each number
    for ( var i = 0; i < grid.length; ++i )
    {
        for ( var j = 0; j < grid [i].length; ++j )
        {
            // check the product going down
            var product = 1;
            for ( var downI = i; ( downI < grid.length ) && ( downI < i + 4 );
                ++downI ) product *= grid [downI] [j];
            if ( product > largestNumber ) largestNumber = product;
            // check the product going right
            product = 1;
            for ( var rightJ = j; ( rightJ < grid [i].length ) &&
                ( rightJ < j + 4 ); ++rightJ ) product *= grid [i] [rightJ];
            if ( product > largestNumber ) largestNumber = product;
            // check the product going down and right
            product = 1;
            for ( var downI = i, rightJ = j; ( downI < grid.length ) &&
                ( downI < i + 4 ) && ( rightJ < grid [i].length ) &&
                ( rightJ < j + 4 ); ++downI, ++rightJ )
                product *= grid [downI] [rightJ];
            if ( product > largestNumber ) largestNumber = product;
            // check the product going up and right
            product = 1;
            for ( var upI = i, rightJ = j; ( upI > 0 ) &&
                ( upI > i - 4 ) && ( rightJ < grid [i].length ) &&
                ( rightJ < j + 4 ); --upI, ++rightJ )
                product *= grid [upI] [rightJ];
            if ( product > largestNumber ) largestNumber = product;
        }
    }
    
    return largestNumber;
}

this.solve = function ()
{
    return process ( 1 );
};
this.test = function ()
{
    // no good test case
    return process ( 1 );
};