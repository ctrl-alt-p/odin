import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  closeDate: DS.attr('date'),
  cost: DS.attr('string'),
  price: DS.attr('number'),
  gainLoss: DS.attr('string'),
  gainLossPercent: DS.attr('string'),
  openDate: DS.attr('date'),
  proceeds: DS.attr('string'),
  quantity: DS.attr('number'),
  symbol: DS.attr('string'),
  term: DS.attr('number'),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
