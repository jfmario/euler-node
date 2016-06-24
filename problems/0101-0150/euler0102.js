/**
 * The solution to Project Euler problem #102.
 * @module problems/0101-0150/euler0102.js
 */
 
var fs = require ( 'fs' );
var Triangle = require ( '../../utils/triangle' );
 
// Perform the logic for solving the problem.
function process ( textFile )
{
    
    var answer = 0;
    var textContent = fs.readFileSync ( textFile, 'utf-8' );
    var lines = textContent.split ( '\n' );
    for ( var i = 0; i < lines.length; ++i )
    {
        
        var coordinates = lines [i].split ( ',' );
        // object for triangle constructor
        var triangleObj = { coordinates: [] };
        for ( var j = 0; j < coordinates.length; ++j )
            triangleObj.coordinates.push ( parseInt ( coordinates [j] ) );
        var triangle = new Triangle ( triangleObj );
        
        if ( triangle.containsOrigin () ) ++answer;
    }
    
    return answer;
}

this.solve = function ()
{
    return process ( './data/euler0102.txt' );
};
this.test = function ()
{
    return process ( './data/euler0102_test.txt' );
};