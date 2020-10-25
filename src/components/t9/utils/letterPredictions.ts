export const letterPredictions = (digits: string, digitMapping: Record<string, string[]>) => {
    if (!digits || !digits.length) return [];

    const lettersMatrix = digits.split('').map(digit => digitMapping[digit] || ['']);

    return lettersMatrix.reduce((strings: any, currentEntry: any) => {
        const combinations: string[] = [];

        strings.reduce((_: any, current: string) => {
            [...currentEntry].map(digit => combinations.push(`${current}${digit}`))
        }, '');

        return combinations
    });
}