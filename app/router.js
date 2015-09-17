import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', function() {
    this.route('profile');
    this.route('balances');
    this.route('positions');
    this.route('history');
    this.route('gainloss');
    this.route('orders');
  });

  this.route('accounts', function() {});
});

export default Router;
