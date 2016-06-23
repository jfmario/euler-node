/**
 * Tests the logic of the Project Euler solutions in order to ensure that
 * the module library is still functioning.
 * @file tests/problem-example-tests.js
 */
 
var chai = require ( 'chai' );
var expect = chai.expect;
var E0101 = require ( '../problems/0101-0150/euler0101' );

describe( 'EulerTestCases', function() {
  it ( 'answer to Problem #101 test case should be 74', function() {
    expect( E0101.test () ).to.equal ( 74 );
  });
});