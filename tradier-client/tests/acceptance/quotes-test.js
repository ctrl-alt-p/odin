import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Quote', {
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

test('visiting /quotes without data', function(assert) {
  visit('/quotes');

  andThen(function() {
    assert.equal(currentPath(), 'quotes.index');
    assert.equal(find('#blankslate').text().trim(), 'No Quotes found');
  });
});

test('visiting /quotes with data', function(assert) {
  server.create('quote');
  visit('/quotes');

  andThen(function() {
    assert.equal(currentPath(), 'quotes.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new quote', function(assert) {
  visit('/quotes');
  click('a:contains(New Quote)');

  andThen(function() {
    assert.equal(currentPath(), 'quotes.new');

    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Description) input', 'MyString');
    fillIn('label:contains(Exch) input', 'MyString');
    fillIn('label:contains(Type) input', 'MyString');
    fillIn('label:contains(Change) input', 42);
    fillIn('label:contains(Change percentage) input', 42);
    fillIn('label:contains(Volume) input', 42);
    fillIn('label:contains(Average volume) input', 42);
    fillIn('label:contains(Last volume) input', 42);
    fillIn('label:contains(Trade date) input', new Date());
    fillIn('label:contains(Open) input', 42);
    fillIn('label:contains(High) input', 42);
    fillIn('label:contains(Low) input', 42);
    fillIn('label:contains(Close) input', 42);
    fillIn('label:contains(Prevclose) input', 42);
    fillIn('label:contains(Week 52 high) input', 42);
    fillIn('label:contains(Week 52 low) input', 42);
    fillIn('label:contains(Bid) input', 42);
    fillIn('label:contains(Bidsize) input', 42);
    fillIn('label:contains(Bidexch) input', 'MyString');
    fillIn('label:contains(Bid date) input', new Date());
    fillIn('label:contains(Ask) input', 42);
    fillIn('label:contains(Asksize) input', 42);
    fillIn('label:contains(Askexch) input', 'MyString');
    fillIn('label:contains(Ask date) input', new Date());
    fillIn('label:contains(Open interest) input', 42);
    fillIn('label:contains(Underlying) input', 'MyString');
    fillIn('label:contains(Strike) input', 42);
    fillIn('label:contains(Contract size) input', 42);
    fillIn('label:contains(Expiration date) input', new Date());
    fillIn('label:contains(Expiration type) input', 'MyString');
    fillIn('label:contains(Option type) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing quote', function(assert) {
  server.create('quote');
  visit('/quotes');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'quotes.edit');

    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Description) input', 'MyString');
    fillIn('label:contains(Exch) input', 'MyString');
    fillIn('label:contains(Type) input', 'MyString');
    fillIn('label:contains(Change) input', 42);
    fillIn('label:contains(Change percentage) input', 42);
    fillIn('label:contains(Volume) input', 42);
    fillIn('label:contains(Average volume) input', 42);
    fillIn('label:contains(Last volume) input', 42);
    fillIn('label:contains(Trade date) input', new Date());
    fillIn('label:contains(Open) input', 42);
    fillIn('label:contains(High) input', 42);
    fillIn('label:contains(Low) input', 42);
    fillIn('label:contains(Close) input', 42);
    fillIn('label:contains(Prevclose) input', 42);
    fillIn('label:contains(Week 52 high) input', 42);
    fillIn('label:contains(Week 52 low) input', 42);
    fillIn('label:contains(Bid) input', 42);
    fillIn('label:contains(Bidsize) input', 42);
    fillIn('label:contains(Bidexch) input', 'MyString');
    fillIn('label:contains(Bid date) input', new Date());
    fillIn('label:contains(Ask) input', 42);
    fillIn('label:contains(Asksize) input', 42);
    fillIn('label:contains(Askexch) input', 'MyString');
    fillIn('label:contains(Ask date) input', new Date());
    fillIn('label:contains(Open interest) input', 42);
    fillIn('label:contains(Underlying) input', 'MyString');
    fillIn('label:contains(Strike) input', 42);
    fillIn('label:contains(Contract size) input', 42);
    fillIn('label:contains(Expiration date) input', new Date());
    fillIn('label:contains(Expiration type) input', 'MyString');
    fillIn('label:contains(Option type) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing quote', function(assert) {
  server.create('quote');
  visit('/quotes');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'quotes.show');

    assert.equal(find('p strong:contains(Symbol:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Description:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Exch:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Type:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Change:)').next().text(), 42);
    assert.equal(find('p strong:contains(Change percentage:)').next().text(), 42);
    assert.equal(find('p strong:contains(Volume:)').next().text(), 42);
    assert.equal(find('p strong:contains(Average volume:)').next().text(), 42);
    assert.equal(find('p strong:contains(Last volume:)').next().text(), 42);
    assert.equal(find('p strong:contains(Trade date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Open:)').next().text(), 42);
    assert.equal(find('p strong:contains(High:)').next().text(), 42);
    assert.equal(find('p strong:contains(Low:)').next().text(), 42);
    assert.equal(find('p strong:contains(Close:)').next().text(), 42);
    assert.equal(find('p strong:contains(Prevclose:)').next().text(), 42);
    assert.equal(find('p strong:contains(Week 52 high:)').next().text(), 42);
    assert.equal(find('p strong:contains(Week 52 low:)').next().text(), 42);
    assert.equal(find('p strong:contains(Bid:)').next().text(), 42);
    assert.equal(find('p strong:contains(Bidsize:)').next().text(), 42);
    assert.equal(find('p strong:contains(Bidexch:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Bid date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Ask:)').next().text(), 42);
    assert.equal(find('p strong:contains(Asksize:)').next().text(), 42);
    assert.equal(find('p strong:contains(Askexch:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Ask date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Open interest:)').next().text(), 42);
    assert.equal(find('p strong:contains(Underlying:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Strike:)').next().text(), 42);
    assert.equal(find('p strong:contains(Contract size:)').next().text(), 42);
    assert.equal(find('p strong:contains(Expiration date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Expiration type:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Option type:)').next().text(), 'MyString');
  });
});

test('delete a quote', function(assert) {
  server.create('quote');
  visit('/quotes');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'quotes.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
