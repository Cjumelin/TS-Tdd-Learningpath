export const tail = (word: string): string => {
    return word.slice(1)
}

export const head = (word: string): string => {
    return word.slice(0, 1).toUpperCase()
}

export const zeroPad = (padLength: number, word: string): string => {
    return word.padEnd(padLength, '0')
}