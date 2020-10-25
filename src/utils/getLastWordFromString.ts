export const getLastWordFromString = (text: string) => {
    if (!text.length) return text;

    const lastSpace = text.lastIndexOf(" ") + 1;

    return text.slice(lastSpace);
}