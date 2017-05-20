import { browser, by, element } from 'protractor';
describe('Hello World!', function () {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display message saying Car management!', () => {
        const title = element(by.css('app-root h1')).getText();
        expect(title).toEqual('Dashboard');
    });
});
