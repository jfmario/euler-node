/**
 * Module containing functions relating to prime numbers.
 * Created for Problem #3.
 * @module modules/primes.js
 * @author John F Marion
 */
 
/**
 * Calculates the prime factorization of a given number.
 * @function getPrimeFactors
 * @param    {number}        number     The number to calculate the prime factors of
 * @returns  {array}                    The prime factors of the number
 */
this.getPrimeFactors = function ( number, primesList )
{
    
    var primeFactors = [];
    
    for ( var i = 2; i <= parseInt ( Math.sqrt ( number ) ) + 1; ++i )
    {
        while ( number % i == 0 )
        {
            number /= i;
            primeFactors.push ( i );
        }
        if ( number == 1 ) break;
    }
    if ( number > 1 ) primeFactors.push ( number );
    
    return primeFactors;
};

/**
 * Calculates prime numbers in the given range using the sieve method.
 * @function getPrimes
 * @param    {number}  min The minimum desired prime
 * @param    {number}  max The maximum desired prime
 * @returns  {array}       A list of prime numbers from min to max
 */
this.getPrimes = function ( min, max )
{
    
    var primes = [];
    var sieve = [];
    
    // console.log ( 'Building sieve array...' );
    for ( var i = 0; i < max; ++i ) { sieve.push ( false ); }
    // console.log ( 'Sieving...' );
    for ( var i = 2; i <= max; ++i )
    {
        for ( var j = i * 2; j <= max; j += i )
        {
            sieve [j] = true;
            // console.log ( j );
        }
    }
    // console.log ( 'Creating prime list...' );
    for ( var i = min; i < max; ++i )
    {
        if ( !sieve [i] )
        {
            primes.push ( i );
            // console.log ( i );
        }
    }

    return primes;
};