/**
 * Tests the logic of the Project Euler solutions in order to ensure that
 * the module library is still functioning.
 * @file tests/problem-example-tests.js
 */

var chai = require ( 'chai' );
var expect = chai.expect;

var E0001 = require ( '../problems/euler0001' );
var E0002 = require ( '../problems/euler0002' );
var E0003 = require ( '../problems/euler0003' );
var E0004 = require ( '../problems/euler0004' );
var E0005 = require ( '../problems/euler0005' );
var E0006 = require ( '../problems/euler0006' );
var E0007 = require ( '../problems/euler0007' );
var E0008 = require ( '../problems/euler0008' );
var E0009 = require ( '../problems/euler0009' );
var E0010 = require ( '../problems/euler0010' );
var E0012 = require ( '../problems/euler0012' );
var E0014 = require ( '../problems/euler0014' );

var E0101 = require ( '../problems/euler0101' );
var E0102 = require ( '../problems/euler0102' );
var E0104 = require ( '../problems/euler0104' );
var E0105 = require ( '../problems/euler0105' );

describe( 'EulerTestCases', function() {
    it ( 'answer to Problem #1 test case should be 23', function() {
        expect ( E0001.test () ).to.equal ( 23 );
    });
    it ( 'answer to Problem #2 test case should be 44', function() {
        expect ( E0002.test () ).to.equal ( 44 );
    });
    it ( 'answer to Problem #3 test case should be 29', function() {
        expect ( E0003.test () ).to.equal ( 29 );
    });
    it ( 'answer to Problem #4 test case should be 9009', function() {
        expect ( E0004.test () ).to.equal ( 9009 );
    });
    it ( 'answer to Problem #5 test case should be 2520', function() {
        expect ( E0005.test () ).to.equal ( 2520 );
    });
    it ( 'answer to Problem #6 test case should be 2640', function() {
        expect ( E0006.test () ).to.equal ( 2640 );
    });
    it ( 'answer to Problem #7 test case should be 13', function() {
        expect ( E0007.test () ).to.equal ( 13 );
    });
    it ( 'answer to Problem #8 test case should be 5832', function() {
        expect ( E0008.test () ).to.equal ( 5832 );
    });
    it ( 'answer to Problem #9 test case should be 60', function() {
        expect ( E0009.test () ).to.equal ( 60 );
    });
    it ( 'answer to Problem #10 test case should be "17"', function() {
        expect ( E0010.test () ).to.equal ( '17' );
    });
    it ( 'Problem #11 does not need to be tested', function () {
        expect ( true ).to.equal ( true );
    });
    it ( 'answer to Problem #12 test case should be 28', function() {
        expect ( E0012.test () ).to.equal ( 28 );
    });
    it ( 'Problem #13 does not need to be tested', function () {
        expect ( true ).to.equal ( true );
    });
    it ( 'answer to Problem #14 test case should be 9', function() {
        expect ( E0014.test () ).to.equal ( 9 );
    });
    

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
    it ( 'answer to Problem #105 test case should be 1286', function() {
        expect ( E0105.test () ).to.equal ( 1286 );
    });
});
