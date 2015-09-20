import Ember from 'ember';

const {
    A, Controller
} = Ember;

export
default Controller.extend({
    navSections: new A([{
        name: 'Home',
        route: 'index',
        new: true,
    }])
});
