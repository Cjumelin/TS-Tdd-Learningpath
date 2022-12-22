const MAX_CODE_LENGTH = 4

export class Soundex {
    public encode(word: string): string {
        return this.zeroPad(this.head(word) + this.encodeDigits(word))
    }

    private zeroPad(word: string): string {
        return word.padEnd(MAX_CODE_LENGTH, '0')
    }

    private head(word: string): string {
        return word.slice(0, 1)
    }

    private encodeDigits(word: string): string {
        if (word.length > 1)
            return this.encodeDigit()
        return ""
    }

    private encodeDigit(): string {
        return '1'
    }
}
