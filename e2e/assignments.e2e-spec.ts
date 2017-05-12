import { $, $$, browser, by, element } from "protractor";
import { EnginePage } from "./assignment.po";
import { EngineDetailPage } from "./engine-detail.po";

// The assignments start here!
// If you are stuck, check out solution.e2e-spec.ts for the solution
describe('Assignments', function () {
    beforeEach(() => {
        browser.get('/');
    });

    describe('Dashboard', () => {
        // Assignment 1: "Using a locator"
        it('should contain a welcome text', () => {
            /* Todo Add the correct locator
                This locator is faulty, make it select the welcome message of the dashboard
             */
            const welcomeElement = element(by.css('h1'));
            const text = welcomeElement.getText();
            expect(text).toEqual('dashboard works!');
        });

        // Assignment 2: "Adding an action"
        it('should contain a link saying engines', () => {
            const engineLink = element.all(by.css('app-root li a')).get(1);
            const text = '';
            /* Todo Add your action
                hint: we need to get the link text and add it to the expectation
             */
            expect(text).toBe('Engines');
        });

        // Assignment 3: "JQuery shorthands"
        it('should have a link containing car', () => {
            /* Todo
                 Write a similar test, but this time check for the "Car" link.
                 Also use the JQuery shorthand for element.all(by.css()).
                 The selector for the test above would be:
                 $$('app-root li a').get(1)
             */
            const carLink = ''; // todo put your selector here
            const text = '';
            expect(text).toEqual('Car');
        });

        // Assignment 4: "Click that button"
        it('should go to the car page when the car link is clicked', () => {
            const carLink = $$('app-root li a').get(2);

            // Todo call the click action on the element

            // Todo write a selector to get the "p" element and assign it to carText
            const carText = '';
            expect(carText).toBe('car has wheels.');
        });

        // Assignment 5: "Using a Page Object"
        it('should go to the engine page when the engine link is clicked', () => {
            const enginePage = new EnginePage();
            const engineLink = $$('app-root li a').get(1);
            engineLink.click();

            /* Todo Get the header text from a page object.
                Call the getHeaderText method on the EnginePage (assignment.po.ts).
                Assign the return value to engineText.
             */
            const engineText = '';
            expect(engineText).toEqual('Engines')
        });

        // Assignment 6: "Extending the page object"
        it('should go to the engine detail page when an engine is selected', () => {
            const enginePage = new EnginePage();
            const engineDetailPage = new EngineDetailPage();
            browser.get('/engines');

            /* Todo Select an engine using a Page Object method
                1. Define a method on the EnginePage class
                2. Make this method select an engine
                3. Call the method on the enginePage object in our test case
             */

            const engineText = engineDetailPage.getHeaderText();
            expect(engineText).toContain('Engine:');
        });

        /* --- Bonus Section  --- */

        // 🌈🌈🌈 Bonus points!!! #Awesome #TryHard 🦄✨🌈🌈🌈
        // 1. Rewrite Assignment 1 and 2 to use JQuery shorthands.
        // 2. Rewrite Assignment 1 through 5 to use Page Object for all actions and selectors.
        // 3. Write a test which validates that you can navigate back to the engine overview from the engine detail page.

        // 👼👼👼 Bonus bonus points!!! #BlackBeltCertifiedNinja 👼👼👼
        // 1. Split up the tests according to their page.
        // 2. Use Page Object for everything
        // 3. Separate selectors and actions in the Page Objects.
        // 4. Add suites to the protractor config
        // 5. Run the tests multibrowser in Chrome and Firefox
        // 6. Go and learn more cool stuff!
    });
});
