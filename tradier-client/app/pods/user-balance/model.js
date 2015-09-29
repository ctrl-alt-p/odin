import DS from 'ember-data';

export
default DS.Model.extend({
    user: DS.belongsTo('user'),
    //
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date'),
    //
    cashAvailable: DS.attr('numbr'),
    price: DS.attr('number'),
    closePl: DS.attr('numbr'),
    currentRequirement: DS.attr('numbr'),
    dayTradeBuyingPower: DS.attr('numbr'),
    dividendBalance: DS.attr('numbr'),
    equity: DS.attr('numbr'),
    longLiquidValue: DS.attr('numbr'),
    longMarketValue: DS.attr('numbr'),
    marketValue: DS.attr('numbr'),
    netValue: DS.attr('numbr'),
    openPl: DS.attr('numbr'),
    optionLongValue: DS.attr('numbr'),
    optionRequirement: DS.attr('numbr'),
    optionShortValue: DS.attr('numbr'),
    pendingCash: DS.attr('numbr'),
    pendingOrdersCount: DS.attr('number'),
    shortLiquidValue: DS.attr('numbr'),
    shortMarketValue: DS.attr('numbr'),
    stockLongValue: DS.attr('numbr'),
    unclearedFunds: DS.attr('numbr'),
    unsettledFunds: DS.attr('numbr'),
    totalCash: DS.attr('numbr'),
    totalEquity: DS.attr('numbr'),
    // Margin:
    fedCall: DS.attr('numbr'),
    maintenanceCall: DS.attr('numbr'),
    optionBuyingPower: DS.attr('numbr'),
    stockBuyingPower: DS.attr('numbr'),
    stockShortValue: DS.attr('numbr'),
    sweep: DS.attr('number'),
});
