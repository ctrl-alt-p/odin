//
// http://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/#mix-n-match:018f314f454c02f710136e47e7884386
// - Body of JSONAPISerializer below
//
// https://github.com/ember-data/active-model-adapter/blob/master/addon/active-model-serializer.js
// - keyForAttribute: Converts camelCased attributes to underscored when serializing.
// - keyForRelationship: Underscores relationship names and appends "_id" or "_ids" when serializing relationship keys.
//
import Ember from 'ember';
import DS from 'ember-data';

export
default DS.JSONAPISerializer.extend({
    /**
     * @method normalizeSingleResponse
     * @param {DS.Store} store
     * @param {DS.Model} primaryModelClass
     * @param {Object} payload
     * @param {String|Number} id
     * @param {String} requestType
     * @return {Object} JSON-API Document
     */
    normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
        var costbasis = this.mapPayloadToJsonApiFormat(payload);
        payload = {
            data: costbasis,
            included: [],
        };

        return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, true);
    },

    /**
     * @method normalizeArrayResponse
     * @param {DS.Store} store
     * @param {DS.Model} primaryModelClass
     * @param {Object} payload
     * @param {String|Number} id
     * @param {String} requestType
     * @return {Object} JSON-API Document
     */
    normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
        var costbasis = this.mapPayloadToJsonApiFormat(payload);
        payload = {
            data: [costbasis],
            included: [],
        };
        return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
    },

    /**
     * Converts camelCased attributes to underscored when serializing.
     * @method keyForAttribute
     * @param {String} attribute
     * @return String
     */
    keyForAttribute: function(attr) {
        return attr.decamelize();
    },

    /**
     * Underscores relationship names and appends "_id" or "_ids" when serializing
     * relationship keys.
     * @method keyForRelationship
     * @param {String} relationshipModelName
     * @param {String} kind
     * @return String
     */
    keyForRelationship: function(relationshipModelName, kind) {
        var key = relationshipModelName.decamelize();
        if (kind === "belongsTo") {
            return key + "_id";
        } else if (kind === "hasMany") {
            return key.singularize() + "_ids";
        } else {
            return key;
        }
    },

    /**
     * @method mapProfileToJsonApiFormat
     * @param {Object} profile
     * @return {Object} JSON-API Document
     *
     * var sample_payload = {
     *     "accounts": {
     *         "account": {
     *             "account_number": 46885349,
     *             "gainloss": {
     *                 "closed_position": [{
     *                     "close_date": "2015-08-05T22:57:04.170Z",
     *                     "cost": 1536.5,
     *                     "gain_loss": 64.47,
     *                     "gain_loss_percent": 4.2,
     *                     "open_date": "2015-07-22T23:01:02.800Z",
     *                     "proceeds": -1600.97,
     *                     "quantity": 50.0,
     *                     "symbol": "AHS",
     *                     "term": 14
     *                 }, {
     *                     "close_date": "2015-07-16T22:58:51.070Z",
     *                     "cost": 902.5,
     *                     "gain_loss": 121.48,
     *                     "gain_loss_percent": 13.46,
     *                     "open_date": "2015-06-15T23:01:09.303Z",
     *                     "proceeds": -1023.98,
     *                     "quantity": 50.0,
     *                     "symbol": "SUPN",
     *                     "term": 31
     *                 }, {
     *                     "close_date": "2015-07-16T22:58:51.060Z",
     *                     "cost": 1071.0,
     *                     "gain_loss": 60.47,
     *                     "gain_loss_percent": 5.65,
     *                     "open_date": "2015-07-13T23:00:27.310Z",
     *                     "proceeds": -1131.47,
     *                     "quantity": 10.0,
     *                     "symbol": "MDVN",
     *                     "term": 3
     *                 }]
     *             }
     *         }
     *     }
     * }
     */
    mapPayloadToJsonApiFormat: function(payload) {

        var output = {
            id: payload.accounts.account.account_number,
            relationships: {},
            type: "user-costbasis",
            attributes: {
                option_short_value: payload.accounts.account.balances.option_short_value,
                total_equity: payload.accounts.account.balances.total_equity,
                account_number: payload.accounts.account.balances.account_number,
                account_type: payload.accounts.account.balances.account_type,
                close_pl: payload.accounts.account.balances.close_pl,
                current_requirement: payload.accounts.account.balances.current_requirement,
                equity: payload.accounts.account.balances.equity,
                long_market_value: payload.accounts.account.balances.long_market_value,
                market_value: payload.accounts.account.balances.market_value,
                open_pl: payload.accounts.account.balances.open_pl,
                option_long_value: payload.accounts.account.balances.option_long_value,
                option_requirement: payload.accounts.account.balances.option_requirement,
                pending_orders_count: payload.accounts.account.balances.pending_orders_count,
                short_market_value: payload.accounts.account.balances.short_market_value,
                stock_long_value: payload.accounts.account.balances.stock_long_value,
                total_cash: payload.accounts.account.balances.total_cash,
                uncleared_funds: payload.accounts.account.balances.uncleared_funds,
                pending_cash: payload.accounts.account.balances.pending_cash,
                fed_call: payload.accounts.account.balances.margin.fed_call,
                maintenance_call: payload.accounts.account.balances.margin.maintenance_call,
                option_buying_power: payload.accounts.account.balances.margin.option_buying_power,
                stock_buying_power: payload.accounts.account.balances.margin.stock_buying_power,
                stock_short_value: payload.accounts.account.balances.margin.stock_short_value,
                sweep: payload.accounts.account.balances.margin.sweep,
            }
        };
        return output;
    },
});
