const MAX_CODE_LENGTH = 4

const digitEncoder: Record<string, string> = {
    "b": "1", "f": "1", "p": "1", "v": "1",
    "c": "2", "g": "2", "j": "2", "k": "2", "q": "2", "s": "2", "x": "2", "z": "2",
    "d": "3", "t": "3",
    "l": "4",
    "m": "5", "n": "5",
    "r": "6",
}

export class Soundex {
    public encode(word: string): string {
        return this.zeroPad(this.head(word) + this.encodeDigits(this.tail(word)))
    }

    private zeroPad(word: string): string {
        return word.padEnd(MAX_CODE_LENGTH, '0')
    }

    private tail(word: string): string {
        return word.slice(1, word.length)
    }

    private head(word: string): string {
        return word.slice(0, 1)
    }

    private encodeDigits(word: string): string {
        let encodedConsonant: string = "";
        for (let char of word)
            encodedConsonant += this.encodeDigit(char)
        return encodedConsonant
    }

    private encodeDigit(letter: string): string {
        return digitEncoder[letter] || ""
    }
}
