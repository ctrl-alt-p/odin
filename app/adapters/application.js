export
default DS.JSONAPIAdapter.extend({
    host: 'https://api.tradier.com',
    namespace: 'v1',
    headers: {
        'Authorization': 'Bearer CpZtg9d9kFOM1GbrLmcFAp4GGuOW',
        'Accept': 'application/json'
    },
    pathForType: function(type) {
        return Ember.String.underscore(type);
    }
});
