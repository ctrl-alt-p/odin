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
        var balances = this.mapPayloadToJsonApiFormat(payload);
        payload = {
            data: balances,
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
        var balances = this.mapPayloadToJsonApiFormat(payload);
        payload = {
            data: [balances],
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
     *             "balances": {
     *                 "option_short_value": 0,
     *                 "total_equity": 1478.57000000,
     *                 "account_number": 46885349,
     *                 "account_type": "margin",
     *                 "close_pl": 0.00000,
     *                 "current_requirement": 1409.7300000000000,
     *                 "equity": 1433.57000000,
     *                 "long_market_value": 1454.73000000,
     *                 "market_value": 1454.73000000,
     *                 "open_pl": -255.1000000000,
     *                 "option_long_value": 45.0000000,
     *                 "option_requirement": 0,
     *                 "pending_orders_count": 4,
     *                 "short_market_value": 0,
     *                 "stock_long_value": 1409.73000000,
     *                 "total_cash": 23.84000,
     *                 "uncleared_funds": 0,
     *                 "pending_cash": 8,
     *                 "margin": {
     *                     "fed_call": 0,
     *                     "maintenance_call": 0,
     *                     "option_buying_power": 15.8400000000000,
     *                     "stock_buying_power": 15.84000000,
     *                     "stock_short_value": 0,
     *                     "sweep": 0
     *                 }
     *             },
     *             "account_number": 46885349
     *         }
     *     }
     * }
     */
    mapPayloadToJsonApiFormat: function(payload) {
        var output = {
            id: payload.accounts.account.account_number,
            relationships: {},
            type: "user-balances",
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
