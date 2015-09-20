import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  accountNumber: DS.attr('number'),
  dayTrader: DS.attr('boolean'),
  optionLevel: DS.attr('number'),
  type: DS.attr('string'),
  name: DS.attr('string'),
  status: DS.attr('string'),
  classification: DS.attr('string'),
  lastUpdate: DS.attr('date')
});
