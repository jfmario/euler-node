/**
 * Module containing functions relating to palindromes.
 * Created for Problem #4.
 * @module modules/palindromes.js
 */
 
/**
 * Determines if the number in question is a palindrome or not.
 * @function isPalindrome
 * @param  {number}  number The number to be tested
 * @returns {boolean}       true if the number is a palindrome, false otherwise
 */
this.isPalindrome = function ( n )
{
    
    var numberString = n.toString ();
    var j = numberString.length - 1;
    // look at the string forwards and backwards simultaneously
    for ( var i = 0; i < j; ++i )
    {
        if ( numberString [i] != numberString [j] ) return false;
        j = numberString.length - ( i + 2 );
    }
    
    return true;
};