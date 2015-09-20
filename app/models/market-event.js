import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  symbol: DS.attr('string'),
  exch: DS.attr('string'),
  price: DS.attr('number'),
  size: DS.attr('number'),
  cvol: DS.attr('number'),
  date: DS.attr('number'),
  bid: DS.attr('number'),
  bidsz: DS.attr('number'),
  bidexch: DS.attr('number'),
  biddate: DS.attr('date'),
  ask: DS.attr('number'),
  asksz: DS.attr('number'),
  askexch: DS.attr('number'),
  askdate: DS.attr('date'),
  open: DS.attr('number'),
  high: DS.attr('number'),
  low: DS.attr('number'),
  prevClose: DS.attr('number')
});
