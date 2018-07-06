/*jshint unused:false*/

/**
 * Test: Parser apiDescription
 */

// node modules
var should = require('should');

// lib modules
var parser = require('../lib/parsers/api_speed');

describe('Parser: apiSpeed', function() {

    // TODO: Add 1.000 more possible cases ;-)
    var testCases = [
        {
            title: 'good',
            content: '100ms',
            expected: {
                speed: '100ms'
            }
        }
    ];

    // create
    it('sppeed test: should pass all regexp test cases', function(done) {
        testCases.forEach(function(testCase) {
            var parsed = parser.parse(testCase.content);
            (parsed !== null).should.equal(true, 'Title: ' + testCase.title + ', Source: ' + testCase.content);
            parsed.should.eql(testCase.expected);
        });
        done();
    });

});
