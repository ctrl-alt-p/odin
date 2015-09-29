import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {user: 'MyString', amount: 'MyString', price: 42, date: new Date(), transactionType: 'MyString', description: 'MyString', commission: 'MyString', quantity: 42, symbol: 'MyString', tradeType: 'MyString', createdAt: new Date(), updatedAt: new Date() }
);
