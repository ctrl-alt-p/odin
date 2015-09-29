import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: User-costbasis', {
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

test('visiting /user-costbases without data', function(assert) {
  visit('/user-costbases');

  andThen(function() {
    assert.equal(currentPath(), 'user-costbases.index');
    assert.equal(find('#blankslate').text().trim(), 'No User-costbases found');
  });
});

test('visiting /user-costbases with data', function(assert) {
  server.create('user-costbasis');
  visit('/user-costbases');

  andThen(function() {
    assert.equal(currentPath(), 'user-costbases.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new user-costbasis', function(assert) {
  visit('/user-costbases');
  click('a:contains(New User-costbasis)');

  andThen(function() {
    assert.equal(currentPath(), 'user-costbases.new');

    fillIn('label:contains(User) input', 'MyString');
    fillIn('label:contains(Closedate) input', new Date());
    fillIn('label:contains(Cost) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Gainloss) input', 'MyString');
    fillIn('label:contains(Gainlosspercent) input', 'MyString');
    fillIn('label:contains(Opendate) input', new Date());
    fillIn('label:contains(Proceeds) input', 'MyString');
    fillIn('label:contains(Quantity) input', 42);
    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Term) input', 42);
    fillIn('label:contains(Createdat) input', new Date());
    fillIn('label:contains(Updatedat) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing user-costbasis', function(assert) {
  server.create('user-costbasis');
  visit('/user-costbases');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'user-costbases.edit');

    fillIn('label:contains(User) input', 'MyString');
    fillIn('label:contains(Closedate) input', new Date());
    fillIn('label:contains(Cost) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Gainloss) input', 'MyString');
    fillIn('label:contains(Gainlosspercent) input', 'MyString');
    fillIn('label:contains(Opendate) input', new Date());
    fillIn('label:contains(Proceeds) input', 'MyString');
    fillIn('label:contains(Quantity) input', 42);
    fillIn('label:contains(Symbol) input', 'MyString');
    fillIn('label:contains(Term) input', 42);
    fillIn('label:contains(Createdat) input', new Date());
    fillIn('label:contains(Updatedat) input', new Date());

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing user-costbasis', function(assert) {
  server.create('user-costbasis');
  visit('/user-costbases');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'user-costbases.show');

    assert.equal(find('p strong:contains(User:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Closedate:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Cost:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Price:)').next().text(), 42);
    assert.equal(find('p strong:contains(Gainloss:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Gainlosspercent:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Opendate:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Proceeds:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Quantity:)').next().text(), 42);
    assert.equal(find('p strong:contains(Symbol:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Term:)').next().text(), 42);
    assert.equal(find('p strong:contains(Createdat:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Updatedat:)').next().text(), new Date());
  });
});

test('delete a user-costbasis', function(assert) {
  server.create('user-costbasis');
  visit('/user-costbases');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'user-costbases.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
