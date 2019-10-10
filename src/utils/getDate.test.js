import {getDate} from './getDate';

describe('getDate function', () => {
    it('returns current date', () => {
        const result = getDate('December 17, 1995 03:24:00');
        expect(result).toBe('17 декабря, вс, 1995 год');
	});
});