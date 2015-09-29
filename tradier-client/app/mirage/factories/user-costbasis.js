import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {user: 'MyString', closeDate: new Date(), cost: 'MyString', price: 42, gainLoss: 'MyString', gainLossPercent: 'MyString', openDate: new Date(), proceeds: 'MyString', quantity: 42, symbol: 'MyString', term: 42, createdAt: new Date(), updatedAt: new Date() }
);
