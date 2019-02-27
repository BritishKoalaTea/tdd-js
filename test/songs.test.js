const songs = require('../songs.js');

describe('bottles of beer on the wall', () => {

    it('should know the song can continue', () => {
        expect(songs.bottlesofbeeronthewall(2)).toContain('2 bottles of beer on the wall')
    });

    it('should recognise the penultimate bottle', () => {
        expect(songs.bottlesofbeeronthewall(1)).toContain('one bottle')
    });

    it('should know to buy more beer', () => {
        expect(songs.bottlesofbeeronthewall(0)).toContain('go to the store and buy some more')
    });

});