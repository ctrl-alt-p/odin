import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("users");
  this.route("user-balance");
  this.route("user-costbasis");
  this.route("user-history");
  this.route("quote");

  this.resource("quotes", function() {
    this.route("new");

    this.route("edit", {
      path: ":quote_id/edit"
    });

    this.route("show", {
      path: ":quote_id"
    });
  });
});

export default Router;