export class Soundex {
    public encode(word: string): string {
        return this.zeroPad(word)
    }

    private zeroPad(word: string): string {
        return word + '000'
    }
}
