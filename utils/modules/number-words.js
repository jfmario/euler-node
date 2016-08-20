/**
 * Module for functions relating to the English neams for numbers.
 * Craeted for Problem #17.
 * @module utils/modules/number-words.js
 */

// The lengths of some common words.
var TEEN = 'teen'.length;
var HUNDRED = 'hundred'.length;
var THOUSAND = 'thousand'.length;
var AND = 'and'.length;
// The lengths of single digits.
var ONES_PLACE_LENGTHS = {
    '0': 0,
    '1': 'one'.length,
    '2': 'two'.length,
    '3': 'three'.length,
    '4': 'four'.length,
    '5': 'five'.length,
    '6': 'six'.length,
    '7': 'seven'.length,
    '8': 'eight'.length,
    '9': 'nine'.length,
};
// The lengths of special teen words.
var TEENS_LENGTHS = {
    '10': 'ten'.length,
    '11': 'eleven'.length,
    '12': 'twelve'.length,
    '13': 'thir'.length + TEEN,
    '14': 'four'.length + TEEN,
    '15': 'fif'.length + TEEN,
    '16': 'six'.length + TEEN,
    '17': 'seven'.length + TEEN,
    '18': 'eigh'.length + TEEN,
    '19': 'nine'.length + TEEN,
};
// The lengths of ten's place digits.
var TENS_PLACE_LENGTHS = {
    '0': 0,
    '2': 'twenty'.length,
    '3': 'thirty'.length,
    '4': 'forty'.length,
    '5': 'fifty'.length,
    '6': 'sixty'.length,
    '7': 'seventy'.length,
    '8': 'eighty'.length,
    '9': 'ninety'.length,
};
// The lengths of hundred's place digits.
var HUNDREDS_PLACE_LENGTHS = { '0': 0 };
for ( var i = 1; i < 10; ++i )
{
    var strI = i.toString ();
    HUNDREDS_PLACE_LENGTHS [ strI ] = ONES_PLACE_LENGTHS [ strI ] + HUNDRED;
}
// The lengths of thousand's place digits.
var THOUSANDS_PLACE_LENGTHS = { '0': 0 };
for ( var i = 1; i < 10; ++i )
{
    var strI = i.toString ();
    THOUSANDS_PLACE_LENGTHS [ strI ] = ONES_PLACE_LENGTHS [ strI ] + THOUSAND;
}

/**
 * Returns the length of the given number's English name, excluding spaces and
 * hyphens. Only works up to 1000.
 * @param   number {number} The number
 * @returns        {number} The length of the number's English name
 */
this.wordLength = function ( number )
{

    var strN = number.toString ();
    var answer = 0;

    if ( number < 10 ) return ONES_PLACE_LENGTHS [strN];
    if ( strN [ strN.length - 2 ] == '1' )
        answer += TEENS_LENGTHS [ strN.slice ( strN.length -2 ) ];
    else
        answer += ( TENS_PLACE_LENGTHS [ strN.charAt ( strN.length -2 ) ] +
            ONES_PLACE_LENGTHS [ strN.charAt ( strN.length - 1 ) ] );
    if ( strN.length > 2 )
    {
        // include 'and' in most cases
        if ( ( answer != 0 ) && ( strN.charAt ( strN.length - 3 ) != '0' ) )
            answer += AND;
        answer += HUNDREDS_PLACE_LENGTHS [ strN.charAt ( strN.length - 3 ) ];
    }
    if ( strN.length > 3 )
        answer += THOUSANDS_PLACE_LENGTHS [ strN.charAt ( strN.length - 4 ) ];

    return answer;
};
