import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {accountNumber: 42, dayTrader: false, optionLevel: 42, accountType: 'MyString', lastUpdate: new Date(), name: 'MyString', status: 'MyString', classification: 'MyString' }
);
