

export const hasOnlyDigits = (value: string): boolean => {
    return /^\d+$/.test(value);
}