describe('Soundex',() => {

    test('RetainSoleLetterOfOneLetterWord', () => {
        expect(Soundex.encode('A')).toStrictEqual('A')
    });


})
