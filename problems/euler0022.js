/**
 * The solution to Project Euler problem 22.
 * @module problems/euler0022.js
 */
 
var fs = require ( 'fs' );
var letterValues = require ( '../utils/modules/letter-values' );

function calculateNameScore ( name )
{
    var nameValue = 0;
    for ( var i = 0; i < name.length; ++i )
        nameValue += letterValues [name [i]];
    return nameValue;
    
}
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var fileString = fs.readFileSync ( n ).toString ();
    var jsonString = '[' + fileString + ']';
    var names = JSON.parse ( jsonString );
    
    names.sort ();
    
    var total = 0;
    for ( var i = 0; i < names.length; ++i )
    {
        var score = i + 1;
        score *= calculateNameScore ( names [i] );
        total += score;
    }
    
    return total;
}

this.solve = function ()
{
    
    return process ( 'data/euler0022.txt' );
};
this.test = function ()
{
    return 1;
};