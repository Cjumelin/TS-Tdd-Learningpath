import {head, tail, zeroPad} from "./utils/string";
import {isVowel} from "./utils/char";

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
        return zeroPad(
            MAX_CODE_LENGTH,
            head(word) + tail(this.encodeDigits(word))
        )
    }


    private encodeDigits(word: string): string {
        return this.encodeTail(this.encodeHead(word), word)
    }

    private encodeHead(word: string): string {
        return this.encodeDigit(head(word)) || " "
    }

    private encodeTail(encodedConsonant: string, word: string): string {
        for (
            let i = 1;
            !this.isComplete(encodedConsonant) && i < word.length;
            i++
        )
            encodedConsonant = this.encodeLetter(word[i], word[i - 1], encodedConsonant);
        return encodedConsonant
    }

    private encodeLetter(char: string, precedentLetter: string, encodedConsonant: string) {
        const encodedDigit = this.encodeDigit(char)
        if (encodedDigit && !this.shouldCombine(precedentLetter, encodedDigit, encodedConsonant))
            encodedConsonant += encodedDigit;
        return encodedConsonant;
    }

    private shouldCombine(precedentLetter: string, encodedDigit: string, encodedConsonant: string): boolean {
        return encodedDigit === this.lastDigit(encodedConsonant) && !isVowel(precedentLetter)
    }


    private lastDigit(encodedConsonant: string): string | null {
        if (encodedConsonant.length === 0) return null
        return encodedConsonant[encodedConsonant.length - 1]
    }

    private isComplete(encodedConsonant: string): boolean {
        return encodedConsonant.length >= MAX_CODE_LENGTH
    }

    private encodeDigit(letter: string): string | null {
        return digitEncoder[letter.toLowerCase()] || null
    }
}
