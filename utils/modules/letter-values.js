/**
 * @module letter-values
 * Exports an object mapping letters to their position in the alphabet.
 */
 
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letterValues = {};

for ( var i = 0; i < ALPHABET.length; ++i )
    letterValues [ALPHABET [i]] = i + 1;
module.exports = letterValues;