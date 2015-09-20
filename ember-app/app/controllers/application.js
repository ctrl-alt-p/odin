import Ember from 'ember';

const {
    A, Controller
} = Ember;

export
default Controller.extend({
    demoSections: new A([{
        route: 'user.profile',
        name: 'User profile'
    }, {
        route: 'user.balances',
        name: 'User balances'
    }, {
        route: 'user.positions',
        name: 'User positions'
    }, {
        route: 'user.history',
        name: 'User history'
    }, {
        route: 'user.gainloss',
        name: 'User gainloss'
    }, {
        route: 'user.orders',
        name: 'User orders'
    }, {
        route: 'accounts.balances',
        name: 'Accounts balances'
    }, {
        route: 'accounts.positions',
        name: 'Accounts positions'
    }, {
        route: 'accounts.history',
        name: 'Accounts history'
    }, {
        route: 'accounts.gainloss',
        name: 'Accounts gainloss'
    }, {
        route: 'accounts.orders',
        name: 'Accounts orders'
    }, {
        route: 'trading.orders',
        name: 'Trading orders'
    }, {
        route: 'market.quotes',
        name: 'Market.quotes'
    }, {
        route: 'market.timeandsales',
        name: 'Market.timeandsales'
    }, {
        route: 'market.option-chains',
        name: 'Market.option-chains'
    }, {
        route: 'market.option-strikes',
        name: 'Market.option-strikes'
    }, {
        route: 'market.option-expirations',
        name: 'Market.option-expirations'
    }, {
        route: 'market.history',
        name: 'Market.history'
    }, {
        route: 'market.clock',
        name: 'Market.clock'
    }, {
        route: 'market.calendar',
        name: 'Market.calendar'
    }, {
        route: 'market.search',
        name: 'Market.search'
    }, {
        route: 'market.lookup',
        name: 'Market.lookup'
    }, {
        route: 'market.events.session',
        name: 'Market.events.session'
    }, {
        route: 'watchlists',
        name: 'Watchlists'
    }])
});
