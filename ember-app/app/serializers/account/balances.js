/**
 * https://developer.tradier.com/documentation/accounts/get-account-balance
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/balances
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 *
 *
 *
 * Response:
 * =========
 *   Field                   = Description
 *   account_number          = Account Number
 *   account_type            = Account Type (margin, cash, pdt)
 *   cash_available          = The amount of cash that could be withdrawn or invested in new investments, cash that is not required to support existing positions
 *   close_pl                = The Profit & Loss of the current trading day’s closed positions.
 *   current_requirement     = The option requirement of current account positions.
 *   day_trade_buying_power  = The total amount of funds available for the purchase of fully marginable stock during that trading day, a portion of these funds cannot be held overnight.
 *   dividend_balance        = Dividend Balance
 *   equity                  = Equity Value
 *   fed_call                = The amount that the account is in deficit for trades that have occurred but not been paid for.
 *   long_liquid_value       = Long Liquid Value
 *   long_market_value       = Long Market Value
 *   maintenance_call        = The amount that the account is under the minimum equity required in the account to support the current holdings.
 *   market_value            = Market Value
 *   net_value               = Net Value
 *   open_pl                 = The Profit & Loss of current account positions.
 *   option_buying_power     = The amount of funds available to purchase non-marginable securities.
 *   option_long_value       = The value of long options held in the account.
 *   option_requirement      = Option Requirement
 *   option_short_value      = The value of short options held in the account.
 *   pending_cash            = The amount of cash that is being held for open orders.
 *   pending_orders_count    = The amount of open orders.
 *   sweep                   = Sweep
 *   short_liquid_value      = Short Liquid Value
 *   short_market_value      = Short Market Value
 *   stock_buying_power      = The amount of funds available to purchase fully marginable securities.
 *   stock_long_value        = The value of long stocks held in the account.
 *   stock_short_value       = The value of short stocks held in the account.
 *   uncleared_funds         = The amount of funds that are not currently available for trading.
 *   unsettled_funds         = Cash that is in the account from recent stock or option sales, but has not yet settled; cash from stock sales occurring during the last 3 trading days or from option sales occurring during the previous trading day.
 *   total_cash              = The total amount of cash in the account.
 *   total_equity            = The total account value.
 *
 */
import Ember from 'ember';
import DS from 'ember-data';

export
default DS.RESTSerializer.extend({
    primaryKey: 'account_number',
    keyForAttribute: function(attr) {
        return Ember.String.underscore(attr);
    },

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
        console.log(payload);
        // debugger;
        this._mapTradierToEmber(store, primaryModelClass, payload, id, requestType, true);
        console.log(payload);
        // debugger;
        return this.super(store, primaryModelClass, payload, id, requestType);
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
        console.log(payload);
        // debugger;
        this._mapTradierToEmber(store, primaryModelClass, payload, id, requestType, true);
        console.log(payload);
        // debugger;
        return this.super(store, primaryModelClass, payload, id, requestType);
    },

    /**
     * Preprocess the hash to return the correct values
     * payload = {
     *     "accounts": {
     *         "account": {
     *             "account_number": 123456789,
     *             "balances": {
     *                 "option_short_value": 123456789.0,
     *                 "total_equity": 123456789.0,
     *                 "account_number": 123456789.0,
     *                 "account_type": 123456789.0,
     *                 "close_pl": 123456789.0,
     *                 "current_requirement": 123456789.0,
     *                 "equity": 123456789.0,
     *                 "long_market_value": 123456789.0,
     *                 "market_value": 123456789.0,
     *                 "open_pl": 123456789.0,
     *                 "option_long_value": 123456789.0,
     *                 "option_requirement": 123456789.0,
     *                 "pending_orders_count": 123456789.0,
     *                 "short_market_value": 123456789.0,
     *                 "stock_long_value": 123456789.0,
     *                 "total_cash": 123456789.0,
     *                 "uncleared_funds": 123456789.0,
     *                 "pending_cash": 123456789.0,
     *                 "margin": {
     *                     "fed_call": 123456789.0,
     *                     "maintenance_call": 123456789.0,
     *                     "option_buying_power": 123456789.0,
     *                     "stock_buying_power": 123456789.0,
     *                     "stock_short_value": 123456789.0,
     *                     "sweep": 123456789.0
     *                 }
     *             }
     *         }
     *     }
     * }
     */
    _mapTradierToEmber: function(store, primaryModelClass, payload, id, requestType, isSingle) {
        var output = {};
        output.account_number = payload.account.account_number;
        output.option_short_value = payload.account.balances.option_short_value;
        output.total_equity = payload.account.balances.total_equity;
        output.account_number = payload.account.balances.account_number;
        output.account_type = payload.account.balances.account_type;
        output.close_pl = payload.account.balances.close_pl;
        output.current_requirement = payload.account.balances.current_requirement;
        output.equity = payload.account.balances.equity;
        output.long_market_value = payload.account.balances.long_market_value;
        output.market_value = payload.account.balances.market_value;
        output.open_pl = payload.account.balances.open_pl;
        output.option_long_value = payload.account.balances.option_long_value;
        output.option_requirement = payload.account.balances.option_requirement;
        output.pending_orders_count = payload.account.balances.pending_orders_count;
        output.short_market_value = payload.account.balances.short_market_value;
        output.stock_long_value = payload.account.balances.stock_long_value;
        output.total_cash = payload.account.balances.total_cash;
        output.uncleared_funds = payload.account.balances.uncleared_funds;
        output.pending_cash = payload.account.balances.pending_cash;
        output.margin = payload.account.balances.margin;
        output.fed_call = payload.account.balances.margin.fed_call;
        output.maintenance_call = payload.account.balances.margin.maintenance_call;
        output.option_buying_power = payload.account.balances.margin.option_buying_power;
        output.stock_buying_power = payload.account.balances.margin.stock_buying_power;
        output.stock_short_value = payload.account.balances.margin.stock_short_value;
        output.sweep = payload.account.balances.margin.sweep;

        payload.data = isSingle ? output : [output];
        payload.meta = {};
        payload.errors = null;
    },

    /**
     * Returns the resource's attributes formatted as a JSON-API "attributes object".
     * http://jsonapi.org/format/#document-resource-object-attributes
     * @method extractAttributes
     * @param {Object} modelClass
     * @param {Object} resourceHash
     * @return {Object}
     */
    extractAttributes: function(modelClass, resourceHash) {
        var attributeKey;
        var attributes = {};

        modelClass.eachAttribute((key) => {
            attributeKey = this.keyForAttribute(key, 'deserialize');
            if (resourceHash.hasOwnProperty(attributeKey)) {
                attributes[key] = resourceHash[attributeKey];
            }
        });

        return attributes;
    },
});
