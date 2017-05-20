import { $, $$, browser, by, element } from "protractor";
import { EnginePage } from "./solution.po";
import { EngineDetailPage } from "./engine-detail.po";

// The solutions start here!
describe('Solutions', function () {
    beforeEach(() => {
        browser.get('/');
    });

    describe('Dashboard', () => {
        // Assignment 1: "Using a locator"
        it('should contain a welcome text', () => {
            const welcomeElement = element(by.css('p'));
            const text = welcomeElement.getText();
            expect(text).toEqual('Car management dashboard.');
        });

        // Assignment 2: "Adding an action"
        it('should contain a link saying engines', () => {
            const engineLink = element.all(by.css('app-root li a')).get(1);
            const text = engineLink.getText();
            expect(text).toBe('Engines');
        });

        // Assignment 3: "JQuery shorthands"
        it('should have a link containing car', () => {
            const carLink = $$('app-root li a').get(2);
            const text = carLink.getText();
            expect(text).toEqual('Car');
        });

        // Assignment 4: "Click that button"
        it('should go to the car page when the car link is clicked', () => {
            const carLink = $$('app-root li a').get(2);
            carLink.click();
            const carText = $('p').getText();
            expect(carText).toBe('car has wheels.');
        });

        // Assignment 5: "Using a page object"
        it('should go to the engine page when the engine link is clicked', () => {
            const enginePage = new EnginePage();
            const engineLink = $$('app-root li a').get(1);
            engineLink.click();
            const engineText = enginePage.getHeaderText();
            expect(engineText).toEqual('Engines')
        });

        // Assignment 6: "Extending the page object"
        it('should go to the engine detail page when an engine is selected', () => {
            const enginePage = new EnginePage();
            const engineDetailPage = new EngineDetailPage();
            browser.get('/engines');
            enginePage.selectEngine(1);
            const engineText = engineDetailPage.getHeaderText();
            expect(engineText).toContain('Engine:');
        });
    });
});
