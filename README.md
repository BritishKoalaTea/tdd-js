# TDD JavaScript, with Node and Jest #

TDD JavaScript, the tests are here but the code is missing

Install: 'npm install'

Run: 'npm run test'

There are 4 test suites covering different aspects of JavaScript.  Right now, 3 tests pass, those are demonstration tests to show you how to do some test setup. 

To run just one test, use 'npm run test -t test/maths.test.js'

To skip a test, put '.skip' after its describe ( 'describe.skip('some test') )

Once you have a test working, figure out two ways to break it by changing the code (not the test)

## Work them in this order: maths, stringy, songs, dates. ##

Tests for:
* Add two numbers
* Multiply two numbers
* Square a numbers
* Cube a number
* Concatenate two strings
* Concatenate three strings without spaces
* Get the 13th letter in a given phrase
* Get the Nth letter in a given phrase
* Sing '10 bottles of beer on the wall'
* Sing 'N bottles of beer on the wall'
* For '99 bottles of beer on the wall,' handle the 2, 1, and 0 cases
* For '99 bottles of beer on the wall,' handle the zero, one, and no cases
* What day of the week a month starts on
* What day of the week a date is and the day name
* Whether as given month/year has a Friday the Thirteenth
* How many Friday Thirteenths in a given year
