//
// Imported from http://stackoverflow.com/a/28634279
//
import DS from 'ember-data';

export
default DS.RESTAdapter.extend({
    namespace: 'v1/user/profile',
    host: 'https://api.tradier.com',

    buildURL: function(type, id, record) {
        return this.host + "/" + this.namespace;
    },

    ajax: function(url, method, hash) {
        hash = hash || {}; // hash may be undefined
        hash.crossDomain = true; // make it CORS
        hash.xhrFields = {
            // withCredentials: true
        };
        return this._super(url, method, hash);
    },
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer CpZtg9d9kFOM1GbrLmcFAp4GGuOW',
    },

    find: function(store, type, id, record) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('user', id), 'GET');
    },

    findAll: function(store, type, sinceToken) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('user'), 'GET');
    },

    findRecord: function(store, type, id, snapshot) {
        return this.ajax(this.buildURL(type.modelName, id, snapshot, 'findRecord'), 'GET');
    },

    findQuery: function(store, type, query) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('user', query), 'GET');
    },

    findMany: function(store, type, ids, owner) {
        // customization here or within buildURL
        return this.ajax(this.buildURL('user', ids), 'GET');
    }
});
