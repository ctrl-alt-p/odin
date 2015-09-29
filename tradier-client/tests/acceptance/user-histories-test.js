import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: User-history', {
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

test('visiting /user-histories without data', function(assert) {
  visit('/user-histories');

  andThen(function() {
    assert.equal(currentPath(), 'user-histories.index');
    assert.equal(find('#blankslate').text().trim(), 'No User-histories found');
  });
});

test('visiting /user-histories with data', function(assert) {
  server.create('user-history');
  visit('/user-histories');

  andThen(function() {
    assert.equal(currentPath(), 'user-histories.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new user-history', function(assert) {
  visit('/user-histories');
  click('a:contains(New User-history)');

  andThen(function() {
    assert.equal(currentPath(), 'user-histories.new');

    fillIn('label:contains(User) input', 'MyString');
    fillIn('label:contains(Amount) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Date) input', new Date());
    fillIn('label:contains(Transactiontype) input', 'MyString');
    fillIn('label:contains(Description) input', 'MyString');
    fillIn('label:contains(Commission) input', 'MyString');
    fillIn('label:contains(Quantity) input', 42);
    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Tradetype) input', 'MyString');
    fillIn('label:contains(Createdat) input', new Date());
    fillIn('label:contains(Updatedat) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing user-history', function(assert) {
  server.create('user-history');
  visit('/user-histories');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'user-histories.edit');

    fillIn('label:contains(User) input', 'MyString');
    fillIn('label:contains(Amount) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Date) input', new Date());
    fillIn('label:contains(Transactiontype) input', 'MyString');
    fillIn('label:contains(Description) input', 'MyString');
    fillIn('label:contains(Commission) input', 'MyString');
    fillIn('label:contains(Quantity) input', 42);
    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Tradetype) input', 'MyString');
    fillIn('label:contains(Createdat) input', new Date());
    fillIn('label:contains(Updatedat) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing user-history', function(assert) {
  server.create('user-history');
  visit('/user-histories');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'user-histories.show');

    assert.equal(find('p strong:contains(User:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Amount:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Price:)').next().text(), 42);
    assert.equal(find('p strong:contains(Date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Transactiontype:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Description:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Commission:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Quantity:)').next().text(), 42);
    assert.equal(find('p strong:contains(Symbol:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Tradetype:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Createdat:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Updatedat:)').next().text(), new Date());
  });
});

test('delete a user-history', function(assert) {
  server.create('user-history');
  visit('/user-histories');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'user-histories.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
