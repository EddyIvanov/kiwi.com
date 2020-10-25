import { mapping } from "../constants/mapping";
import { KEYS_CONTENT } from "../../keyboard/constants";

export const letterPredictions = (digits: string) => {
    if (!digits || !digits.length) return [];

    const lettersMatrix = digits.split('').map(digit => KEYS_CONTENT[digit] || ['']);

    return lettersMatrix.reduce((strings: any, currentEntry: any) => {
        const combinations: string[] = [];

        strings.reduce((_: any, current: string) => {
            [...currentEntry].map(digit => combinations.push(`${current}${digit}`))
        }, '');

        return combinations
    });
}