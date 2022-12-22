
class Soundex {
 encode(_word: string): string {
    return 'A'
 }
}
describe('Soundex',() => {
    let soundex: Soundex;

    beforeEach(() => {
        soundex = new Soundex()
    })

    test('RetainSoleLetterOfOneLetterWord', () => {
        expect(soundex.encode('A')).toStrictEqual('A')
    });


})
