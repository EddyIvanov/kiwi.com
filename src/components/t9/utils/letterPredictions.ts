export const letterPredictions = (digits: string, digitMapping: Record<string, string[]>) => {
    if (!digits || !digits.length) return [];

    const lettersMatrix = digits.split('').map(digit => digitMapping[digit] || ['']);

    return lettersMatrix.reduce((strings: string[], currentEntry: string[]) => {
        const combinations: string[] = [];

        strings.reduce((_: any, current: string) => {
            return [...currentEntry].map(digit => combinations.push(`${current}${digit}`))
        }, '' as any);

        return combinations
    });
}