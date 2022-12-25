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

    test('replace consonants with appropriate digit', () => {
        expect(soundex.encode('Ax')).toStrictEqual('A200')
    });

    test('ignore non alphabetic characters', () => {
        expect(soundex.encode('A#')).toStrictEqual('A000')
    });

    test('replace multiple consonants with digits', () => {
        expect(soundex.encode('Acdl')).toStrictEqual('A234')
    });

    test('limits length to four characters', () => {
        expect(soundex.encode('Dcdlb').length).toStrictEqual(4)
    });

})
