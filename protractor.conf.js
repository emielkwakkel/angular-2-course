// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,

    // This is where we include our spec files
    specs: [
        // this is used to include all specs in the e2e folder
        './e2e/**/*.e2e-spec.ts'
    ],

    // We specify our browser setup here
    capabilities: {
        'browserName': 'chrome'
    },

    // This allows protractor to control the browser without the selenium server
    directConnect: true,

    // The base url of the application
    baseUrl: 'http://localhost:4200/',

    // The testing framework which is used
    framework: 'jasmine',

    // Some configuration for the testing framework
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {
        }
    },


    useAllAngular2AppRoots: true,

    // Run the tests on a node environment
    beforeLaunch: function() {
        require('ts-node').register({
            project: 'e2e'
        });
    },

    // Adds a reporter to show a pretty output
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};
