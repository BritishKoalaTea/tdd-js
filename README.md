# TDD JavaScript, with Node and Jest #

TDD JavaScript, the tests are here but the code is missing

Install: 'npm install'

Run: 'npm run test'

There are 29 tests total, in 4 test suites. Right now, 3 tests pass, those are demonstration tests to show you how to do some test setup. 

To run just one test, use 'npm run test -t test/maths.test.js'

To skip a test, put '.skip' after its describe ( 'describe.skip('some test') )

Once you have a test working, figure out two ways to break it by changing the code (not the test)

## Work them in this order: maths, stringy, songs, dates. ##

Tests for:
* Add two numbers
* Multiply two numbers
* Square a number
* Cube a number
* Concatenate two strings
* Get the Nth letter in a given phrase
* For '99 bottles of beer on the wall,' handle the 2, 1, and 0 cases
* What day of the week a month starts on
* What day of the week a date is
* Whether a given month/year combination has a Friday the Thirteenth
