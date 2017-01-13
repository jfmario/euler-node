/**
 * The solution to Project Euler problem 21.
 * @module problems/euler0021.js
 */
 
function d ( n )
{
    
    var divisor_sum = 1;
    
    for ( var i = 2; i < parseInt ( Math.sqrt ( n ) ) + 1; ++i )
    {
        // see if a numbe is proper divisor
        if ( n % i == 0 )
        {
            divisor_sum += i;
            // add the higher number in to, but don't count the square root twice
            if ( i != Math.sqrt ( n ) )
                divisor_sum += ( n / i );
        }
    }
    
    return divisor_sum;
}
// export d for use in other problems
this.d = d;
 
// Perform the logic for solving the problem.
function process ( n )
{
    
    var answer = 0;
    var seen = [];
    
    for ( var i = 3; i < n; ++i )
    {
        if ( seen.indexOf ( i ) != -1 ) continue;
        var d_i = d ( i );
        // Make sure the d(i) is not equal to i, greater than or equal to n
        // Then check if d ( d_i ) equals i
        if ( ( d_i != i ) && ( d_i < n ) && ( d ( d_i ) == i ) )
        {
            
            seen.push ( i );
            seen.push ( d_i );
            
            answer += ( i + d_i );
        }
    }
    
    return answer;
}

this.solve = function ()
{
    return process ( 10000 );
};
this.test = function ()
{
    return process ( 1000 );
};