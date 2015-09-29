import DS from 'ember-data';

export
default DS.Model.extend({
    user: DS.belongsTo('user'),
    stock: DS.belongsTo('stock'),
    //
    symbol: DS.attr('string'),
    openDate: DS.attr('date'),
    closeDate: DS.attr('date'),
    cost: DS.attr('string'),
    price: DS.attr('number'),
    proceeds: DS.attr('string'),
    quantity: DS.attr('number'),
    term: DS.attr('number'),
    gainLoss: DS.attr('string'),
    gainLossPercent: DS.attr('string'),
    //
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date'),
});
