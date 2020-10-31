import { hasOnlyDigits } from '../hasOnlyDigits';

describe('hasOnlyDifgits', () => {
    test("Test function's use cases", async () => {
        expect(hasOnlyDigits("9awg")).toBe(false);
        expect(hasOnlyDigits("9awg45")).toBe(false);
        expect(hasOnlyDigits("9345534")).toBe(true);
    });
});