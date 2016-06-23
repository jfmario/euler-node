/**
 * @module functionX
 */
 
var Point = require ( './point' );

/**
 * Creates a new FunctionX object.
 * @class FunctionX
 * @param {function} func - A function taking a number and returning a number
 * @property {function} func - A function of x
 */
var FunctionX = function ( func )
{
    this.func = func;
};

/**
* Generates points from the function from x=1 to x=max.
* @memberof! module:functionX~FunctionX#
* @function generatePoints
* @param {number} max - The maximum 
* @returns {array} An array of Points
* @see module:point~Point
*/
FunctionX.prototype.generatePoints = function ( max )
{
    
    var points = [];
    
    for ( var i = 1; i <= max; ++i )
    {
        points.push ( new Point ( i, this.func ( i ) ) );
    }
    
    return points;
};

module.exports = FunctionX;