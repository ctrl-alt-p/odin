import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  amount: DS.attr('string'),
  price: DS.attr('number'),
  date: DS.attr('date'),
  transactionType: DS.attr('string'),
  description: DS.attr('string'),
  commission: DS.attr('string'),
  quantity: DS.attr('number'),
  symbol: DS.attr('string'),
  tradeType: DS.attr('string'),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
