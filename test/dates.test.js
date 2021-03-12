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

    test('Test that the Moon landing was on a Sunday', () => {
        expect(dateFunctions.dayOfTheWeek(1969, 6, 20)).toEqual(0);
    });

    test('Test that Independence Day 1776 was on a Thursday', () => {
        // Thursday 4th July, 1776
        expect(dateFunctions.dayOfTheWeek(1776, 6, 4)).toEqual(4);
    });

    test('Test for the day name of Independence Day', () => {
        expect(dateFunctions.dayNameOfTheWeek(1776, 6, 4)).toContain('Thursday');
    })

    test('Test for the day name of the Moon Landing', () => {
        expect(dateFunctions.dayNameOfTheWeek(1969, 6, 20)).toContain('Sunday');
    })
});

describe('Test for Friday 13th', () => {

    test('April 2018 does have a Friday 13th', () => {
        result = dateFunctions.hasFridayThirteenth(2018, 3);
        expect(result).toBe(true);
    });

    test('May 2018 does not have a Friday 13th', () => {
        result = dateFunctions.hasFridayThirteenth(2018, 4);
        expect(result).toBe(false);
    });
});

describe('Test for number of Friday 13th in a year', () => {
    // you always get between 1 and 3 Friday 13ths in a year

    test('Number of Friday 13ths in 2000 was 1', () => {
        result = dateFunctions.numberOfFriday13thsThisYear(2000);
        expect(result).toEqual(1);
    });

    test('Number of Friday 13ths in 2017 was 2', () => {
        result = dateFunctions.numberOfFriday13thsThisYear(2017);
        expect(result).toEqual(2);
    });

    test('Number of Friday 13ths in 2015 was 3', () => {
        result = dateFunctions.numberOfFriday13thsThisYear(2015);
        expect(result).toEqual(3);
    });
});
