//
// app/instance-initializers/global.js
//
// * Adds the "App" object to the developer tools
// * Gives you access to the Ember Data store from the App.store object.
// * Source url: http://emberigniter.com/accessing-global-object-in-ember-cli-app/
//

export

function initialize(application) {
    // Get access to the Ember Data store from the App object.
    // Using Ember’s container we attach the store to the application
    application.store = application.container.lookup("service:store");

    // Adds the "App" object to the window object
    window.App = application;
}

export
default {
    name: 'global',
    initialize: initialize
};
