import DS from 'ember-data';

export
default DS.Model.extend({
    accountNumber: DS.attr('number'),
    dayTrader: DS.attr('boolean'),
    optionLevel: DS.attr('number'),
    accountType: DS.attr('string'),
    name: DS.attr(),
    status: DS.attr('string'),
    classification: DS.attr('string'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date')
});
