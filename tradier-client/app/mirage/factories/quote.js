import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend(
  {symbol: 'MyString', description: 'MyString', exch: 'MyString', type: 'MyString', change: 42, changePercentage: 42, volume: 42, averageVolume: 42, lastVolume: 42, tradeDate: new Date(), open: 42, high: 42, low: 42, close: 42, prevclose: 42, week52High: 42, week52Low: 42, bid: 42, bidsize: 42, bidexch: 'MyString', bidDate: new Date(), ask: 42, asksize: 42, askexch: 'MyString', askDate: new Date(), openInterest: 42, underlying: 'MyString', strike: 42, contractSize: 42, expirationDate: new Date(), expirationType: 'MyString', optionType: 'MyString' }
);
