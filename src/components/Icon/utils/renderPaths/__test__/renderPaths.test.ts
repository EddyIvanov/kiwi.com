import { renderPaths } from '../renderPaths';
import { send } from '../../../../../icons/send';

describe('getLastWordFromString', () => {
    test("Test function's use cases", async () => {
        expect(renderPaths(send)).toBe(`<svg viewBox="0 0 32 32"><path d="${send[0]}"></path></svg>`);
    });
});