import { getLastWordFromString } from '../getLastWordFromString';

describe('getLastWordFromString', () => {
    test("Test function's use cases", async () => {
        expect(getLastWordFromString("9awg awagw 3455")).toBe("3455");
        expect(getLastWordFromString("")).toBe("");
        expect(getLastWordFromString("9345534")).toBe("9345534");
    });
});