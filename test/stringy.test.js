const stringy = require('../stringy.js');

describe('String operations', () => {

    test('Can make a greeting', () => {
        result = stringy.joinTwoStrings('hello', ' world');
        expect(result).toEqual('hello world');        
    });

    test('Can make a longer greeting', () => {
        result = stringy.joinTwoStrings('Greetings and salutations', ' to you, good Person!');
        expect(result).toEqual('Greetings and salutations to you, good Person!');
    });
    
    test('Can join three strings', () => {
        result = stringy.joinThreeStrings("Once upon a time,", "it was a dark and stormy night", "when two testers walked into a bar." );
        expect(result).toEqual('Once upon a time, it was a dark and stormy night when two testers walked into a bar.');
    })

    test('Can get the thirteenth letter of the alphabet', () => {
        result = stringy.getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 13);
        expect(result).toEqual('m');
    });
    
    test('Can get the Nth letter of the alphabet', () => {
        result = stringy.getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 5);
        expect(result).toEqual('e');
        expect(stringy.getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 8)).toEqual('h');
        expect(stringy.getTheNthLetter('abcdefghijklmnopqrstuvwxyz', 25)).toEqual('y');
    });
});
