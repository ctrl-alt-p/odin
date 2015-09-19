import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('user', function() {
        this.route('profile');
        this.route('balances');
        this.route('positions');
        this.route('history');
        this.route('gainloss');
        this.route('orders');
    });

    this.route('accounts', function() {
        this.route('balances');
        this.route('positions');
        this.route('history');
        this.route('gainloss');
        this.route('orders');
    });

    this.route('trading', function() {
        this.route('orders');
    });

    this.route('market', function() {
        this.route('quotes');
        this.route('timeandsales');
        this.route('option-chains');
        this.route('option-strikes');
        this.route('option-expirations');
        this.route('history');
        this.route('clock');
        this.route('calendar');
        this.route('search');
        this.route('lookup');
        this.route('events', function() {
            this.route('session');
        });
    });
    this.route('watchlists');
});

export
default Router;
