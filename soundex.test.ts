
class Soundex {
 encode(_word: string): string {
    return ''
 }
}
describe('Soundex',() => {

    test('RetainSoleLetterOfOneLetterWord', () => {
        const soundex = new Soundex()
        expect(soundex.encode('A')).toStrictEqual('A')
    });


})
