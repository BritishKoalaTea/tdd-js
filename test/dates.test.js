const dateFunctions = require('../dates.js');
// see this page of the JS documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// date months are zero-based, so December is month 11
// date days are NOT zero-based

describe('Date operations', () => {

    test('Can tell you what day a month started on', () => {
        // Sunday - Saturday: 0 - 6
        // Friday 1st March, 2019
        expect(dateFunctions.dayOfTheFirstOfMonth(2019, 2)).toEqual(5);
         // Saturday 1st February, 2020
        expect(dateFunctions.dayOfTheFirstOfMonth(2020, 1)).toEqual(6);
         // Monday 1st November, 2021
        expect(dateFunctions.dayOfTheFirstOfMonth(2021, 10)).toEqual(1);
    });
});

describe('Test for day of the week', () => {    
    
    test('Test that April 11, 2018 was a Wednesday', () => {
       expect(dateFunctions.dayOfTheWeek(2018, 3, 11)).toEqual(3);
    });

    test('Test that January 1, 1970 was a Thursday', () => {
        expect(dateFunctions.dayOfTheWeek(1970, 0, 1)).toEqual(4);
    });

    test('Test that Independence Day 1776 was on a Thursday', () => {
        // Thursday 4th July, 1776
        expect(dateFunctions.dayOfTheWeek(1776, 6, 3)).toEqual(3);
    });
});

describe('Test for Friday 13th', () => {

    test('April 2018 does have a Friday 13th', () => {
        result = dateFunctions.hasFridayThirteenth(2018, 3);
        expect(result).toBe(true)
    });

    test('May 2018 does not have a Friday 13th', () => {
        result = dateFunctions.hasFridayThirteenth(2018, 4);
        expect(result).toBe(false)
    });
});
