import Ember from 'ember';
import DS from 'ember-data';

export
default DS.RESTSerializer.extend({
    keyForAttribute: function(attr, method) {
        console.log(attr, method);
        return Ember.String.underscore(attr).toUpperCase();
    },

    isNewSerializerAPI: true,

    /**
     * [normalizeResponse description]
     * @param  {[type]} store             [description]
     * @param  {[type]} primaryModelClass [description]
     * @param  {[type]} payload           [description]
     * @param  {[type]} id                [description]
     * @param  {[type]} requestType       [description]
     * @return {[type]}                   [description]
     */
    normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
        console.log(payload);
        debugger;

        // The "payload" object is exactly like the one returned from
        // your API, nothing changed yet - do whatever you want to do.
        // In the below example I am deleting the "request_id" not to
        // pass this down to my serializers and generating errors
        delete payload.request_id;

        // The below calls the "super", which will run the internal conversion
        // from the old format to the new JSONApi 2.0 standard. It will also
        // run all your transforms and other hooks that you have
        // Return the prepared object with relational data
        return this._super(store, primaryModelClass, payload, id, requestType);
    },

    /**
     * [normalizeSingleResponse description]
     * @param  {[type]} store             [description]
     * @param  {[type]} primaryModelClass [description]
     * @param  {[type]} payload           [description]
     * @param  {[type]} id                [description]
     * @param  {[type]} requestType       [description]
     * @return {[type]}                   [description]
     */
    normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
        console.log(payload);
        debugger;
        // This method is run if you have a single (singular) object returned from the backend

        // You could modify the payload here however you want
        // knowing that it's only called for the specific model
        // with the same name as the serializer.
        // So if this was the file "app/serializers/customer.js"
        // this serializer would be called for the customer-model
        // fetching a single record

        if (typeof payload.customer_id !== 'undefined') {
            // Replace customer_id, set id
            payload.id = payload.customer_id;
            delete payload.customer_id;
        }

        // Return the payload, run the super - bubble up the chain
        return this._super(store, primaryModelClass, payload, id, requestType);
    },



    /**
     * [normalizeArrayResponse description]
     * @param  {[type]} store             [description]
     * @param  {[type]} primaryModelClass [description]
     * @param  {[type]} payload           [description]
     * @param  {[type]} id                [description]
     * @param  {[type]} requestType       [description]
     * @return {[type]}                   [description]
     */
    normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
        console.log(payload);
        debugger;
        // This method is run if you have multiple record objects returned from the backend

        // You could modify the payload here however you want
        // knowing that it's only called for the specific model
        // with the same name as the serializer.
        // So if this was the file "app/serializers/customer.js"
        // this serializer would be called for the customer-model
        // fetching multiple records

        if (typeof payload.customers !== 'undefined') {
            // Loop through and fix
            // Remove place, zip - we don't use them now
            for (var i = 0; i < payload.customers.length; i++) {
                // Replace customer_id, set id
                payload.customers[i].id = payload.customers[i].customer_id;
                delete payload.customers[i].customer_id;
            }
        }

        // Return the payload, run the super - bubble up the chain
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
