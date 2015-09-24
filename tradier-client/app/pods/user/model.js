import DS from 'ember-data';

export
default DS.Model.extend({
    //
    // Model attributes:
    //
    name: DS.attr('string'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date'),
    //
    // User's permissions:
    //
    classification: DS.attr('string'),
    dayTrader: DS.attr('boolean'),
    optionLevel: DS.attr('number'),
    status: DS.attr('string'),
    //
    // Association to Account:
    //
    accountNumber: DS.attr('number'),
    accountType: DS.attr('string'),
    account: DS.belongsTo('account'),
});
