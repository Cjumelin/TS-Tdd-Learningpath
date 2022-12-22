class Soundex {
    public encode(word: string): string {
        return this.zeroPad(word)
    }

    private zeroPad(word: string): string {
        return word + '000'
    }
}

describe('Soundex', () => {
    let soundex: Soundex;

    beforeEach(() => {
        soundex = new Soundex()
    })

    test('retain the sole letter of a one letter word', () => {
        expect(soundex.encode('A')).toStrictEqual('A')
    });

    test('pads with zero to ensure three digit', () => {
        expect(soundex.encode('I')).toStrictEqual('I000')
    });

})
