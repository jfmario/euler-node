/**
 * @module triangle
 */
 
var Line = require ( './line' );
var Point = require ( './point' );

/**
 * Creates a new Triangle object.
 * @class Triangle
 * @param {object} obj - An object containing construction information.
 * @property {Line} a - One line of the Triangle
 * @property {Line} b - Another line of the Triangle
 * @property {Line} c - Another line of the Triangle
 * @see module:line~Line
 * @see module:point~Point
 * @example
 * // All the following lines create the same Triangle
 * new Triangle ({ points: { a: new Point ( 0, 2 ), b: new Point ( 2, 0 ), c: new Point ( -2, 0 ) });
 * new Triangle ({ lines: { a: new Line ( point0, point1 ), b: new Line ( point1, point2 ), c: new Line ( point2, point0 ) });
 * new Triangle ({ coordinates: [ 0, 2, 2, 0, -2, 0 ] });
 */
var Triangle = function ( obj )
{
    if ( obj.points )
    {
        this.a = new Line ( obj.points.a, obj.points.b );
        this.b = new Line ( obj.points.b, obj.points.c );
        this.c = new Line ( obj.points.c, obj.points.a );
    }
    else if ( obj.lines )
    {
        this.a = obj.lines.a;
        this.b = obj.lines.b;
        this.c = obj.lines.c;
    }
    else if ( obj.coordinates )
    {
        var p1 = new Point ( obj.coordinates [0], obj.coordinates [1] );
        var p2 = new Point ( obj.coordinates [2], obj.coordinates [3] );
        var p3 = new Point ( obj.coordinates [4], obj.coordinates [5] );
        this.a = new Line ( p1, p2 );
        this.b = new Line ( p2, p3 );
        this.c = new Line ( p3, p1 );
    }
};

/**
* Determines whether or not the Triangle contains origin by using the ray test with the y-axis.
* @memberof! module:triangle~Triangle#
* @function containsOrigin
* @returns {boolean} true if the Triangle contains origin, false otherwise
*/
Triangle.prototype.containsOrigin = function ( arg )
{
    
    var yInterceptCount = 0;
    if ( this.a.yIntercept.y > 0 && this.a.yInterceptInSegment () )
        ++yInterceptCount;
    if ( this.b.yIntercept.y > 0 && this.b.yInterceptInSegment () )
        ++yInterceptCount;
    if ( this.c.yIntercept.y > 0 && this.c.yInterceptInSegment () )
        ++yInterceptCount;
    if ( yInterceptCount % 2 == 1 ) return true;
    
    return false;
};

module.exports = Triangle;