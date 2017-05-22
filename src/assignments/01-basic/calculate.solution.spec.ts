import { incrementPositiveNumber } from './calculate';

describe('calculate', () => {
    it('should increment a positive input number by one', () => {
        const result = incrementPositiveNumber(10);

        expect(result).toBe(11);
    });

    it('should return zero if negative input number is supplied', () => {
        const result = incrementPositiveNumber(-10);

        expect(result).toBe(0);
    })
});
