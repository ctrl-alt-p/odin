import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Option-chain', {
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

test('visiting /option-chains without data', function(assert) {
  visit('/option-chains');

  andThen(function() {
    assert.equal(currentPath(), 'option-chains.index');
    assert.equal(find('#blankslate').text().trim(), 'No Option-chains found');
  });
});

test('visiting /option-chains with data', function(assert) {
  server.create('option-chain');
  visit('/option-chains');

  andThen(function() {
    assert.equal(currentPath(), 'option-chains.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new option-chain', function(assert) {
  visit('/option-chains');
  click('a:contains(New Option-chain)');

  andThen(function() {
    assert.equal(currentPath(), 'option-chains.new');

    fillIn('label:contains(Stock) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing option-chain', function(assert) {
  server.create('option-chain');
  visit('/option-chains');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'option-chains.edit');

    fillIn('label:contains(Stock) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing option-chain', function(assert) {
  server.create('option-chain');
  visit('/option-chains');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'option-chains.show');

    assert.equal(find('p strong:contains(Stock:)').next().text(), 'MyString');
  });
});

test('delete a option-chain', function(assert) {
  server.create('option-chain');
  visit('/option-chains');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'option-chains.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
