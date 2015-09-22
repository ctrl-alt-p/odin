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
        route: 'quotes',
        name: 'S&P 500 Quotes'
    }])
});
