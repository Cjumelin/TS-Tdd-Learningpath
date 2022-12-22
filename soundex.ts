export class Soundex {
    public encode(word: string): string {
        let encoded = word.slice(0, 1)
        if (word.length > 1)
            encoded += "1"
        return this.zeroPad(encoded)
    }

    private zeroPad(word: string): string {
        return word.padEnd(4, '0')
    }
}
