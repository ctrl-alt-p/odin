import DS from 'ember-data';

export default DS.Model.extend({
  accountNumber: DS.attr('number'),
  dayTrader: DS.attr('boolean'),
  optionLevel: DS.attr('number'),
  accountType: DS.attr('string'),
  lastUpdate: DS.attr('date'),
  name: DS.attr('string'),
  status: DS.attr('string'),
  classification: DS.attr('string')
});
