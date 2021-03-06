import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("users", function() {
    this.route("new");

    this.route("edit", {
      path: ":user_id/edit"
    });

    this.route("show", {
      path: ":user_id"
    });
  });

  this.route("user-balance");
  this.route("user-costbasis");
  this.route("user-history");
  this.route("quote");

  this.route("quotes", {
    resetNamespace: true
  }, function() {
    this.route("new");

    this.route("edit", {
      path: ":quote_id/edit"
    });

    this.route("show", {
      path: ":quote_id"
    });
  });

  this.route("stocks", function() {
    this.route("new");

    this.route("edit", {
      path: ":stock_id/edit"
    });

    this.route("show", {
      path: ":stock_id"
    });
  });

  this.route("my-portfolio");

  this.route("option-expirations", {
    resetNamespace: true
  }, function() {
    this.route("new");

    this.route("edit", {
      path: ":option-expiration_id/edit"
    });

    this.route("show", {
      path: ":option-expiration_id"
    });
  });

  this.route("option-chains", {
    resetNamespace: true
  }, function() {
    this.route("new");

    this.route("edit", {
      path: ":option-chain_id/edit"
    });

    this.route("show", {
      path: ":option-chain_id"
    });
  });

  this.route("options");

  this.resource("user-balances", function() {
    this.route("new");

    this.route("edit", {
      path: ":user-balance_id/edit"
    });

    this.route("show", {
      path: ":user-balance_id"
    });
  });

  this.resource("user-costbases", function() {
    this.route("new");

    this.route("edit", {
      path: ":user-costbasis_id/edit"
    });

    this.route("show", {
      path: ":user-costbasis_id"
    });
  });

  this.resource("user-histories", function() {
    this.route("new");

    this.route("edit", {
      path: ":user-history_id/edit"
    });

    this.route("show", {
      path: ":user-history_id"
    });
  });
});

export default Router;