import Ember from 'ember';

const {
    A, Controller
} = Ember;

export
default Controller.extend({
    navSections: new A([{
        route: 'index',
        name: 'Home'
    }, {
        route: 'stocks',
        name: 'Stocks'
    }, {
        route: 'options',
        name: 'Options'
    }, {
        route: 'my-portfolio',
        name: 'My Portfolio'
    }])
});
