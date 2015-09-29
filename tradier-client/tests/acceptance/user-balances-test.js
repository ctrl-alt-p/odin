import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: User-balance', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /user-balances without data', function(assert) {
  visit('/user-balances');

  andThen(function() {
    assert.equal(currentPath(), 'user-balances.index');
    assert.equal(find('#blankslate').text().trim(), 'No User-balances found');
  });
});

test('visiting /user-balances with data', function(assert) {
  server.create('user-balance');
  visit('/user-balances');

  andThen(function() {
    assert.equal(currentPath(), 'user-balances.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new user-balance', function(assert) {
  visit('/user-balances');
  click('a:contains(New User-balance)');

  andThen(function() {
    assert.equal(currentPath(), 'user-balances.new');

    fillIn('label:contains(User) input', 'MyString');
    fillIn('label:contains(Cashavailable) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Closepl) input', 'MyString');
    fillIn('label:contains(Currentrequirement) input', 'MyString');
    fillIn('label:contains(Daytradebuyingpower) input', 'MyString');
    fillIn('label:contains(Dividendbalance) input', 'MyString');
    fillIn('label:contains(Equity) input', 'MyString');
    fillIn('label:contains(Fedcall) input', 'MyString');
    fillIn('label:contains(Longliquidvalue) input', 'MyString');
    fillIn('label:contains(Longmarketvalue) input', 'MyString');
    fillIn('label:contains(Maintenancecall) input', 'MyString');
    fillIn('label:contains(Marketvalue) input', 'MyString');
    fillIn('label:contains(Netvalue) input', 'MyString');
    fillIn('label:contains(Openpl) input', 'MyString');
    fillIn('label:contains(Optionbuyingpower) input', 'MyString');
    fillIn('label:contains(Optionlongvalue) input', 'MyString');
    fillIn('label:contains(Optionrequirement) input', 'MyString');
    fillIn('label:contains(Optionshortvalue) input', 'MyString');
    fillIn('label:contains(Pendingcash) input', 'MyString');
    fillIn('label:contains(Pendingorderscount) input', 42);
    fillIn('label:contains(Sweep) input', 42);
    fillIn('label:contains(Shortliquidvalue) input', 'MyString');
    fillIn('label:contains(Shortmarketvalue) input', 'MyString');
    fillIn('label:contains(Stockbuyingpower) input', 'MyString');
    fillIn('label:contains(Stocklongvalue) input', 'MyString');
    fillIn('label:contains(Stockshortvalue) input', 'MyString');
    fillIn('label:contains(Unclearedfunds) input', 'MyString');
    fillIn('label:contains(Unsettledfunds) input', 'MyString');
    fillIn('label:contains(Totalcash) input', 'MyString');
    fillIn('label:contains(Totalequity) input', 'MyString');
    fillIn('label:contains(Createdat) input', new Date());
    fillIn('label:contains(Updatedat) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing user-balance', function(assert) {
  server.create('user-balance');
  visit('/user-balances');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'user-balances.edit');

    fillIn('label:contains(User) input', 'MyString');
    fillIn('label:contains(Cashavailable) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Closepl) input', 'MyString');
    fillIn('label:contains(Currentrequirement) input', 'MyString');
    fillIn('label:contains(Daytradebuyingpower) input', 'MyString');
    fillIn('label:contains(Dividendbalance) input', 'MyString');
    fillIn('label:contains(Equity) input', 'MyString');
    fillIn('label:contains(Fedcall) input', 'MyString');
    fillIn('label:contains(Longliquidvalue) input', 'MyString');
    fillIn('label:contains(Longmarketvalue) input', 'MyString');
    fillIn('label:contains(Maintenancecall) input', 'MyString');
    fillIn('label:contains(Marketvalue) input', 'MyString');
    fillIn('label:contains(Netvalue) input', 'MyString');
    fillIn('label:contains(Openpl) input', 'MyString');
    fillIn('label:contains(Optionbuyingpower) input', 'MyString');
    fillIn('label:contains(Optionlongvalue) input', 'MyString');
    fillIn('label:contains(Optionrequirement) input', 'MyString');
    fillIn('label:contains(Optionshortvalue) input', 'MyString');
    fillIn('label:contains(Pendingcash) input', 'MyString');
    fillIn('label:contains(Pendingorderscount) input', 42);
    fillIn('label:contains(Sweep) input', 42);
    fillIn('label:contains(Shortliquidvalue) input', 'MyString');
    fillIn('label:contains(Shortmarketvalue) input', 'MyString');
    fillIn('label:contains(Stockbuyingpower) input', 'MyString');
    fillIn('label:contains(Stocklongvalue) input', 'MyString');
    fillIn('label:contains(Stockshortvalue) input', 'MyString');
    fillIn('label:contains(Unclearedfunds) input', 'MyString');
    fillIn('label:contains(Unsettledfunds) input', 'MyString');
    fillIn('label:contains(Totalcash) input', 'MyString');
    fillIn('label:contains(Totalequity) input', 'MyString');
    fillIn('label:contains(Createdat) input', new Date());
    fillIn('label:contains(Updatedat) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing user-balance', function(assert) {
  server.create('user-balance');
  visit('/user-balances');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'user-balances.show');

    assert.equal(find('p strong:contains(User:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Cashavailable:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Price:)').next().text(), 42);
    assert.equal(find('p strong:contains(Closepl:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Currentrequirement:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Daytradebuyingpower:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Dividendbalance:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Equity:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Fedcall:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Longliquidvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Longmarketvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Maintenancecall:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Marketvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Netvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Openpl:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Optionbuyingpower:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Optionlongvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Optionrequirement:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Optionshortvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Pendingcash:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Pendingorderscount:)').next().text(), 42);
    assert.equal(find('p strong:contains(Sweep:)').next().text(), 42);
    assert.equal(find('p strong:contains(Shortliquidvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Shortmarketvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Stockbuyingpower:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Stocklongvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Stockshortvalue:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Unclearedfunds:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Unsettledfunds:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Totalcash:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Totalequity:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Createdat:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Updatedat:)').next().text(), new Date());
  });
});

test('delete a user-balance', function(assert) {
  server.create('user-balance');
  visit('/user-balances');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'user-balances.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
