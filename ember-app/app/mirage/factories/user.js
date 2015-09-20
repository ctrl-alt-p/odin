import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {id: 42, accountNumber: 42, dayTrader: false, optionLevel: 42, type: 'MyString', name: 'MyString', status: 'MyString', classification: 'MyString', lastUpdate: new Date() }
);
