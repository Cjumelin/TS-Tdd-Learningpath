
class Soundex {

}
describe('Soundex',() => {

    test('RetainSoleLetterOfOneLetterWord', () => {
        const soundex = new Soundex()
        expect(Soundex.encode('A')).toStrictEqual('A')
    });


})
