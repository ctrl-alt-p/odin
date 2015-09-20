import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {type: 'MyString', symbol: 'MyString', exch: 'MyString', price: 42, size: 42, cvol: 42, date: 42, bid: 42, bidsz: 42, bidexch: 42, biddate: new Date(), ask: 42, asksz: 42, askexch: 42, askdate: new Date(), open: 42, high: 42, low: 42, prevClose: 42 }
);
