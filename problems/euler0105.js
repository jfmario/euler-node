/**
 * The solution to Project Euler problem #.
 * @module problems/euler0101.js
 */
 
var fs = require ( 'fs' );
var NumberSet = require ( '../utils/numberset' );
 
// Perform the logic for solving the problem.
function process ( textFile )
{
    
    var answer = 0;
    var textContent = fs.readFileSync ( textFile, 'utf-8' );
    var lines = textContent.split ( '\n' );
    for ( var i = 0; i < lines.length; ++i )
    {
        
        var setArray = lines [i].split ( ',' );
        var numberSet = new NumberSet ( setArray );
        
        if ( numberSet.isSpecialSumSet () ) answer += numberSet.getSum ();
    }
    
    return answer;
}

this.solve = function ()
{
    return process ( 'data/euler0105.txt' );
};
this.test = function ()
{
    return process ( 'data/euler0105_test.txt' );
};