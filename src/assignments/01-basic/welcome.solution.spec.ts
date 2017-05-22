import { welcome }  from './welcome';

describe('welcome', () => {
    it('should contain the supplied name in the output', () => {
        const result = welcome('Willie');
        expect(result).toContain('Willie');
    });

    it('should return a default message when called with no parameters', () => {
       const result = welcome();
       expect(result).toBe('Welcome!');
    })
});