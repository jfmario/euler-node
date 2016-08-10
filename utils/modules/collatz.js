/**
 * Module for functions relating to the Collatz Sequence.
 * Craeted for Problem #14.
 * @module utils/modules/collatz.js
 */
 
/**
 * Returns the next number in the collatz sequence.
 * @param   n {number} The number from which to generate the next
 * @returns   {number} The next number in the Collatz Sequence
 */
this.collatzNext = function ( n )
{
    if ( n % 2 == 0 ) return n / 2;
    else return 3 * n + 1;
};