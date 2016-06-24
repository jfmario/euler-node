/**
 * @module line
 */
 
var Point = require ( './point' );

/**
 * Creates a new Line object. The Line class represents a line between 2 points.
 * @class Line
 * @param {Point} a - The first Point
 * @param {Point} b - The second Point
 * @property {Point} a - The first Point
 * @property {Point} b - The second Point
 * @property {number} slope - The slope of the Line
 * @property {Point} yIntercept - The y-intercept of the line ( regardless of whether or not it is actually a part of the segment )
 * @see module:point~Point
 * @example
 * // Create line y = x from the interval [0,10]
 * new Line ( new Point ( 0, 0 ), new Point ( 10, 10 ) );
 */
var Line = function ( a, b )
{
    this.a = a;
    this.b = b;
    this.slope = a.slopeToOtherPoint ( b );
    /*
     * y = mx + b
     * b = y - mx
     */
    this.yIntercept = new Point ( 0, a.y - this.slope * a.x );
};

/**
* Determines whether or not the Line's y-intercept is a part of the segment.
* @memberof! module:line~Line#
* @function yInterceptInSegment
* @returns {boolean} true if the Line's y-intercept is within the Line segment, otherwise false
*/
Line.prototype.yInterceptInSegment = function ( arg )
{
    // if the endpoints are on opposite sides of the y-axis, return true
    if ( this.a.x >= 0 && this.b.x <= 0 ) return true;
    if ( this.a.x <= 0 && this.b.x >= 0 ) return true;
    return false;
};

module.exports = Line;