/**
 * Class representing a set of integers.
 * Created for Problem 105.
 * @module numberset
 */

/**
 * Creates a new NumberSet object.
 * @class NumberSet
 * @param {array} numbers - The list of numbers
 * @property {array} numbers - The set of numbers
 */
var NumberSet = function ( numbers )
{
    
    this.numbers = [];
    
    for ( var i = 0; i < numbers.length; ++i )
    {
        if ( this.numbers.indexOf ( numbers [i] )  == -1 )
            this.numbers.push ( parseInt ( numbers [i] ) );
    }
    
    // the array must be sorted for anything to work
    this.numbers.sort ();
};

/**
* Calculates the sum of the set.
* @memberof! module:numberset~NumberSet#
* @function getSum
* @returns {number} The sum of the set
*/
NumberSet.prototype.getSum = function ()
{
    var sum = 0;
    for ( var i = 0; i < this.numbers.length; ++i ) sum += this.numbers [i];
    return sum;
};
/**
* Determines whether or not the set is a special sum set or not according to
* the rules asserted by Project Euler.
* @memberof! module:numberset~NumberSet#
* @function isSpecialSumSet
* @returns {boolean} true if the set is a special sum set, false otherwise
*/
NumberSet.prototype.isSpecialSumSet = function ()
{
    
    if ( this.testRule2 () )
    {
        var temp = this.subSums ();
        if ( this.testRule1 ( temp ) ) return true;
    }
    
    return false;
};

// undocumented method for testing rule 1 of special sum sets
// this is currently not working
NumberSet.prototype.testRule1 = function ( sums )
{
    
    var count = 1;
    var k;
    var oldK;
    for ( var i = 0; i < sums.length; ++i )
    {
        k = i;
        while ( k != -1 )
        {
            
            ++count;
            ++k;
            
            if ( k >= sums.length ) break;
            oldK = k;
            k = sums.slice ( k ).indexOf ( sums [i] );
            if ( k != -1 ) k += oldK;
            if ( ( k != -1 ) && ( ( i & k ) == 0 ) ) return false;
        }
    }
    return true;
};
// undocumented method for testing rule 1 of special sum sets
NumberSet.prototype.testRule2 = function ()
{
    
    var frontSum = this.numbers [0];
    var backSum = 0;
    for ( var i = 0; i < this.numbers.length - 1; ++i )
    {
        
        frontSum += this.numbers [ i + 1 ];
        backSum += this.numbers [ this.numbers.length - i - 1 ];
        
        if ( frontSum <= backSum ) return false;
    }
    
    return true;
};
// undocumented method for calculating subSums
NumberSet.prototype.subSums = function ()
{
    
    var sums = [];
    for ( var i = 0; i < Math.pow ( 2, this.numbers.length ); ++i )
    {
        sums.push ( this.subSum ( i ) );
    }
    
    return sums;
};
// undocumented method for calculating a subSub
NumberSet.prototype.subSum = function ( n )
{
    
    var sum = 0;
    for ( var i = 0; i < this.numbers.length; ++i )
    {
        if ( ( n & 1 ) == 1 ) sum += this.numbers [i];
        n >>= 1;
    }
    
    return sum;
};

module.exports = NumberSet;