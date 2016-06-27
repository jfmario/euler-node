/**
 * Iterator class for the Fibonacci sequence.
 * Fn = F(n-1) + F(n-2), where F1 = 1 and F2 = 1.
 * Must use https://www.npmjs.com/package/big-integer
 * Created for Problem #104.
 * @module fibonacci
 */
 
var BigInteger = require ( 'big-integer' );

/**
 * Creates a new Fibonacci iterator object starting at 1.
 * @class Fibonacci
 * @property {BigInteger} last - The previous number in the sequence which use for generating the next.
 * @property {BigInteger} current - The current number in the sequence.
 * @property {number} number - The current count of the sequence.
 */
var Fibonacci = function ( )
{
    this.last = BigInteger.zero;
    this.current = BigInteger.one;
    this.number = 1;
};

/**
* Advances the sequence to the given count.
* @memberof! module:fibonacci~Fibonacci#
* @function advanceTo
* @param {number} fibNumber - The Fibonacci count to advance the sequence to.
*/
Fibonacci.prototype.advanceTo = function ( fibNumber )
{
    while ( this.current < fibNumber ) this.nextNumber ();
};
/**
* Advances the sequence to the next number and returns it.
* @memberof! module:fibonacci~Fibonacci#
* @function nextNumber
* @returns {BigInteger} The next number in the Fibonacci sequence.
*/
Fibonacci.prototype.nextNumber = function ( )
{
    var old = BigInteger ( this.current );
    this.current = this.current.plus ( this.last );
    this.last = BigInteger ( old );
    ++this.number;
    return this.current;
};

module.exports = Fibonacci;