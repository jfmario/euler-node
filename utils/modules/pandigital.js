/**
 * Module containing functions relating to pandigitality.
 * Created for Problem #104.
 * @module modules/pandigital.js
 */
 
var BigInteger = require ( 'big-integer' );

/**
 * All the digits 1-9.
 * @constant DIGITS
 * @type {string}
 */
this.DIGITS = '123456789';
/**
 * Highest possible 9-digit number + 1
 * @constant TEN_POW_9
 * @type {number}
 */
this.TEN_POW_9 = Math.pow ( 10, 9 );
/**
 * Determines if the number in question is pandigital or not.
 * @function isPandigital
 * @param {number} number - The number to be tested for 1-9 pandigitality.
 * @returns {boolan} true if the number is 1-9 pandigital, false otherwise
 */
this.isPandigital = function ( number )
{
    
    var strNumber = number.toString ();
    
    for ( var i = 0; i < 9; ++i )
    {
        if ( strNumber.indexOf ( this.DIGITS [i] ) == -1 ) return false;
    }
    
    return true;
};
/**
 * Determines if the first 9 digits of the number in question are pandigital or not.
 * @function isPandigitalFirst9
 * @param {BigInteger} number - The number to be tested for 1-9 front pandigitality.
 * @returns {boolan} true if the number is 1-9 front pandigital, false otherwise
 */
this.isPandigitalFirst9 = function ( number )
{
    
    // isolate the first 9 digits of the nuber
    var first9 = number.toString().slice(0,9);
    /*
    try {
        var first9 = number.divmod ( BigInteger ( 10 ).pow ( digitCount - 9 ) ).quotient;
    } catch (e) { return false; }
    */
    return this.isPandigital ( first9 );
};
/**
 * Determines if the last 9 digits of the number in question are pandigital or not.
 * @function isPandigitalLast9
 * @param {BigInteger} number - The number to be tested for 1-9 back pandigitality.
 * @returns {boolan} true if the number is 1-9 back pandigital, false otherwise
 */
this.isPandigitalLast9 = function ( number )
{
    // isolate the last 9 digits of the nuber
    var last9 = number.mod ( this.TEN_POW_9 );
    return this.isPandigital ( last9 );
};
