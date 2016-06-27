/**
 * Tests the logic of the Project Euler solutions in order to ensure that
 * the module library is still functioning.
 * @file tests/problem-example-tests.js
 */
 
var chai = require ( 'chai' );
var expect = chai.expect;
var E0101 = require ( '../problems/euler0101' );
var E0102 = require ( '../problems/euler0102' );
var E0104 = require ( '../problems/euler0104' );

describe( 'EulerTestCases', function() {
    it ( 'answer to Problem #101 test case should be 74', function() {
        expect ( E0101.test () ).to.equal ( 74 );
    });
    it ( 'answer to Problem #102 test case should be 1', function() {
        expect ( E0102.test () ).to.equal ( 1 );
    });
    it ( 'Problem #103 does not need to be tested', function () {
        expect ( true ).to.equal ( true );
    });
    it ( 'answer to Problem #104 test case should be 541', function() {
        expect ( E0104.test () ).to.equal ( 541 );
    });
});