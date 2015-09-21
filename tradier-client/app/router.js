import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('user-balance');
  this.route('user-costbasis');
  this.route('user-history');
});

export default Router;
