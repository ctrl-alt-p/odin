import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver,
    // >> debugger //
    LOG_TRANSITIONS_INTERNAL: true,
    // LOG_ACTIVE_GENERATION: true,
    // LOG_VIEW_LOOKUPS: true,
    // LOG_RESOLVER: true
    // << debugger //
});

// >> debugger //
// Ember.run.backburner.DEBUG = true;
// Ember.ENV.RAISE_ON_DEPRECATION = true;
// Ember.LOG_STACKTRACE_ON_DEPRECATION = true;
Ember.LOG_BINDINGS = true;
// Ember.RSVP.on('error', function(error) {
//     Ember.Logger.assert(false, error);
// });
// << debugger //


loadInitializers(App, config.modulePrefix);

export
default App;
