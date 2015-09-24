import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Option-expiration', {
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

test('visiting /option-expirations without data', function(assert) {
  visit('/option-expirations');

  andThen(function() {
    assert.equal(currentPath(), 'option-expirations.index');
    assert.equal(find('#blankslate').text().trim(), 'No Option-expirations found');
  });
});

test('visiting /option-expirations with data', function(assert) {
  server.create('option-expiration');
  visit('/option-expirations');

  andThen(function() {
    assert.equal(currentPath(), 'option-expirations.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new option-expiration', function(assert) {
  visit('/option-expirations');
  click('a:contains(New Option-expiration)');

  andThen(function() {
    assert.equal(currentPath(), 'option-expirations.new');

    fillIn('label:contains(Date) input', new Date());
    fillIn('label:contains(Stock) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing option-expiration', function(assert) {
  server.create('option-expiration');
  visit('/option-expirations');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'option-expirations.edit');

    fillIn('label:contains(Date) input', new Date());
    fillIn('label:contains(Stock) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing option-expiration', function(assert) {
  server.create('option-expiration');
  visit('/option-expirations');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'option-expirations.show');

    assert.equal(find('p strong:contains(Date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Stock:)').next().text(), 'MyString');
  });
});

test('delete a option-expiration', function(assert) {
  server.create('option-expiration');
  visit('/option-expirations');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'option-expirations.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
