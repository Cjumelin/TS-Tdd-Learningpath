import {Soundex} from "./soundex";

describe('Soundex', () => {
    let soundex: Soundex;

    beforeEach(() => {
        soundex = new Soundex()
    })

    test('retain the sole letter of a one letter word', () => {
        expect(soundex.encode('A')).toStrictEqual('A000')
    });

    test('pads with zero to ensure three digit', () => {
        expect(soundex.encode('I')).toStrictEqual('I000')
    });

})
