const stringy = require('../stringy.js');

describe('String operations', () => {

    test('Can make a greeting', () => {
        result = stringy.joinTwoStrings('hello', ' world')
        expect(result).toEqual('hello world');
    });

    test('Can make a longer greeting', () => {
        result = stringy.joinTwoStrings('Greetings and salutations', ' to you, good Person!')
        expect(result).toEqual('Greetings and salutations to you, good Person!');
    });

    test('Can get the thirteenth letter of the alphabet', () => {
        result = stringy.getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 13)
        expect(result).toEqual('m');
    });
});