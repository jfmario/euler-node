/**
 * @module point
 */

/**
 * Creates a new Point object.
 * @class Point
 * @param {number} x - The x-coordinate of the new Point
 * @param {number} y - The y-coordinate of the new Point
 * @property {number} x - The x-coordinate of the Point
 * @property {number} y - The y-coordinate of the Point
 * @see module:point
 */
var Point = function ( x, y )
{
    this.x = x;
    this.y = y;
};

/**
* Calculates the slope to another point.
* @memberof! module:point~Point#
* @function slopeToOtherPoint
* @param {Point} op - The other Point
* @returns {number} The slope of a line to the other Point, undefined in line is veritical
*/
Point.prototype.slopeToOtherPoint = function ( op )
{

    /* Slope = ( y2 - y1 ) / ( x2 - x1 ) */
    var num = op.y - this.y;
    var den = op.x - this.x;
    
    if ( den == 0 ) return undefined;
    return num / den;
};

module.exports = Point;