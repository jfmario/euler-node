/**
 * Node script to create a new problem.
 * @file problem.js
 * @syntax node problem <problem_number> <test_case_answer>
 * @example node problem 10 17
 */
 
var fs = require ( 'fs' );
var problem = ( '0000' + process.argv [2] ).slice ( -4 );
var problemSlug = 'euler' + problem;
var problemFile = './problems/' + problemSlug + '.js';
var problemFileTemplate = fs.readFileSync (
    './templates/problem.js' ).toString ();

fs.writeFileSync ( problemFile, problemFileTemplate );

if ( process.argv [3] )
{
    var problemVariable = 'E' + problem;
}