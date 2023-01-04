const VOWEL = "aeiouy"
export const isVowel = (char: string): boolean => {
    return VOWEL.indexOf(char) >= 0
}