import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: MarketEvent', {
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

test('visiting /market-events without data', function(assert) {
  visit('/market-events');

  andThen(function() {
    assert.equal(currentPath(), 'market-events.index');
    assert.equal(find('#blankslate').text().trim(), 'No Market events found');
  });
});

test('visiting /market-events with data', function(assert) {
  server.create('market-event');
  visit('/market-events');

  andThen(function() {
    assert.equal(currentPath(), 'market-events.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new market-event', function(assert) {
  visit('/market-events');
  click('a:contains(New Market event)');

  andThen(function() {
    assert.equal(currentPath(), 'market-events.new');

    fillIn('label:contains(Type) input', 'MyString');
    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Exch) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Size) input', 42);
    fillIn('label:contains(Cvol) input', 42);
    fillIn('label:contains(Date) input', 42);
    fillIn('label:contains(Bid) input', 42);
    fillIn('label:contains(Bidsz) input', 42);
    fillIn('label:contains(Bidexch) input', 42);
    fillIn('label:contains(Biddate) input', new Date());
    fillIn('label:contains(Ask) input', 42);
    fillIn('label:contains(Asksz) input', 42);
    fillIn('label:contains(Askexch) input', 42);
    fillIn('label:contains(Askdate) input', new Date());
    fillIn('label:contains(Open) input', 42);
    fillIn('label:contains(High) input', 42);
    fillIn('label:contains(Low) input', 42);
    fillIn('label:contains(Prevclose) input', 42);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing market-event', function(assert) {
  server.create('market-event');
  visit('/market-events');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'market-events.edit');

    fillIn('label:contains(Type) input', 'MyString');
    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Exch) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Size) input', 42);
    fillIn('label:contains(Cvol) input', 42);
    fillIn('label:contains(Date) input', 42);
    fillIn('label:contains(Bid) input', 42);
    fillIn('label:contains(Bidsz) input', 42);
    fillIn('label:contains(Bidexch) input', 42);
    fillIn('label:contains(Biddate) input', new Date());
    fillIn('label:contains(Ask) input', 42);
    fillIn('label:contains(Asksz) input', 42);
    fillIn('label:contains(Askexch) input', 42);
    fillIn('label:contains(Askdate) input', new Date());
    fillIn('label:contains(Open) input', 42);
    fillIn('label:contains(High) input', 42);
    fillIn('label:contains(Low) input', 42);
    fillIn('label:contains(Prevclose) input', 42);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing market-event', function(assert) {
  server.create('market-event');
  visit('/market-events');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'market-events.show');

    assert.equal(find('p strong:contains(Type:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Symbol:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Exch:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Price:)').next().text(), 42);
    assert.equal(find('p strong:contains(Size:)').next().text(), 42);
    assert.equal(find('p strong:contains(Cvol:)').next().text(), 42);
    assert.equal(find('p strong:contains(Date:)').next().text(), 42);
    assert.equal(find('p strong:contains(Bid:)').next().text(), 42);
    assert.equal(find('p strong:contains(Bidsz:)').next().text(), 42);
    assert.equal(find('p strong:contains(Bidexch:)').next().text(), 42);
    assert.equal(find('p strong:contains(Biddate:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Ask:)').next().text(), 42);
    assert.equal(find('p strong:contains(Asksz:)').next().text(), 42);
    assert.equal(find('p strong:contains(Askexch:)').next().text(), 42);
    assert.equal(find('p strong:contains(Askdate:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Open:)').next().text(), 42);
    assert.equal(find('p strong:contains(High:)').next().text(), 42);
    assert.equal(find('p strong:contains(Low:)').next().text(), 42);
    assert.equal(find('p strong:contains(Prevclose:)').next().text(), 42);
  });
});

test('delete a market-event', function(assert) {
  server.create('market-event');
  visit('/market-events');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'market-events.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
