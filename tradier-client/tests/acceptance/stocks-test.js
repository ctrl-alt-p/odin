import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Stock', {
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

test('visiting /stocks without data', function(assert) {
  visit('/stocks');

  andThen(function() {
    assert.equal(currentPath(), 'stocks.index');
    assert.equal(find('#blankslate').text().trim(), 'No Stocks found');
  });
});

test('visiting /stocks with data', function(assert) {
  server.create('stock');
  visit('/stocks');

  andThen(function() {
    assert.equal(currentPath(), 'stocks.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new stock', function(assert) {
  visit('/stocks');
  click('a:contains(New Stock)');

  andThen(function() {
    assert.equal(currentPath(), 'stocks.new');

    fillIn('label:contains(Symbol) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing stock', function(assert) {
  server.create('stock');
  visit('/stocks');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'stocks.edit');

    fillIn('label:contains(Symbol) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing stock', function(assert) {
  server.create('stock');
  visit('/stocks');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'stocks.show');

    assert.equal(find('p strong:contains(Symbol:)').next().text(), 'MyString');
  });
});

test('delete a stock', function(assert) {
  server.create('stock');
  visit('/stocks');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'stocks.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
