import DS from 'ember-data';

export
default DS.Model.extend({
    //
    // Model Attributes:
    //
    symbol: DS.attr('string'),
    description: DS.attr('string'),
    exch: DS.attr('string'),
    type: DS.attr('string'),
    change: DS.attr('number'),
    changePercentage: DS.attr('number'),
    volume: DS.attr('number'),
    averageVolume: DS.attr('number'),
    lastVolume: DS.attr('number'),
    tradeDate: DS.attr('date'),
    open: DS.attr('number'),
    high: DS.attr('number'),
    low: DS.attr('number'),
    close: DS.attr('number'),
    prevclose: DS.attr('number'),
    week52High: DS.attr('number'),
    week52Low: DS.attr('number'),
    bid: DS.attr('number'),
    bidsize: DS.attr('number'),
    bidexch: DS.attr('string'),
    bidDate: DS.attr('date'),
    ask: DS.attr('number'),
    asksize: DS.attr('number'),
    askexch: DS.attr('string'),
    askDate: DS.attr('date'),
    openInterest: DS.attr('number'),
    underlying: DS.attr('string'),
    strike: DS.attr('number'),
    contractSize: DS.attr('number'),
    expirationDate: DS.attr('date'),
    expirationType: DS.attr('string'),
    optionType: DS.attr('string'),
    //
    // Services:
    //
    exchange_codes: Ember.inject.service('exchange-codes'),
    //
    // Calculated Attributes:
    //
    exchange_name: Ember.computed('type', 'exch', function() {
        return this.get('exchange_codes').exchange_name(this.get('type'), this.get('exch'));
    }),
    bid_exchange_name: Ember.computed('type', 'bidexch', function() {
        return this.get('exchange_codes').exchange_name(this.get('type'), this.get('bidexch'));
    }),
    ask_exchange_name: Ember.computed('type', 'askexch', function() {
        return this.get('exchange_codes').exchange_name(this.get('type'), this.get('askexch'));
    }),
    //
    // Associations to other models:
    //
    option_expiration: DS.belongsTo('option-expiration'),
    stock: Ember.computed('type', 'option_expiration', function() {
        return this.get('option_expiration').get('stock');
    }),
});
