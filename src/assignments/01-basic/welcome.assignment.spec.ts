// TODO Import the welcome function

xdescribe('welcome', () => {
    it('should contain the supplied name in the output', () => {
        // TODO Call the welcome function supplying 'Willie' as parameter
        const result = 'Willie';

        // TODO Expect the result to contain (toContain) 'Willie'
    });

    it('should return a default message when called with no parameters', () => {
       const result = welcome();
       expect(result).toBe('Welcome!');
    })
});