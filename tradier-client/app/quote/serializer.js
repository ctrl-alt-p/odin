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
        // var sample_payload = {
        //     "quotes": {
        //         "quote": [{
        //             "symbol": "SPY",
        //             "description": "SPDR S&P 500",
        //             "exch": "P",
        //             "type": "etf",
        //             "last": 197.29,
        //             "change": 1.85,
        //             "change_percentage": 0.95,
        //             "volume": 34906785,
        //             "average_volume": 144724626,
        //             "last_volume": 100,
        //             "trade_date": 1442849425000,
        //             "open": 196.44,
        //             "high": 197.68,
        //             "low": 196.24,
        //             "close": null,
        //             "prevclose": 195.45,
        //             "week_52_high": 213.78,
        //             "week_52_low": 181.92,
        //             "bid": 197.28,
        //             "bidsize": 23,
        //             "bidexch": "Z",
        //             "bid_date": 1442849426000,
        //             "ask": 197.29,
        //             "asksize": 18,
        //             "askexch": "Q",
        //             "ask_date": 1442849426000,
        //             "root_symbols": "SPY7,SPY"
        //         }]
        //     }
        // }
        payload.quotes.quote = Ember.makeArray(payload.quotes.quote);
        var quote = this.mapQuoteToJsonApiFormat(payload.quotes.quote[0]);
        payload = {
            data: quote,
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
        // var sample_payload = {
        //     "quotes": {
        //         "quote": [{
        //             "symbol": "SPY",
        //             "description": "SPDR S&P 500",
        //             "exch": "P",
        //             "type": "etf",
        //             "last": 197.29,
        //             "change": 1.85,
        //             "change_percentage": 0.95,
        //             "volume": 34906785,
        //             "average_volume": 144724626,
        //             "last_volume": 100,
        //             "trade_date": 1442849425000,
        //             "open": 196.44,
        //             "high": 197.68,
        //             "low": 196.24,
        //             "close": null,
        //             "prevclose": 195.45,
        //             "week_52_high": 213.78,
        //             "week_52_low": 181.92,
        //             "bid": 197.28,
        //             "bidsize": 23,
        //             "bidexch": "Z",
        //             "bid_date": 1442849426000,
        //             "ask": 197.29,
        //             "asksize": 18,
        //             "askexch": "Q",
        //             "ask_date": 1442849426000,
        //             "root_symbols": "SPY7,SPY"
        //         }]
        //     }
        // }

        payload.quotes.quote = Ember.makeArray(payload.quotes.quote);
        var quotes = payload.quotes.quote.map(this.mapQuoteToJsonApiFormat);
        payload = {
            data: quotes,
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
            return singularize(key) + "_ids";
        } else {
            return key;
        }
    },

    /**
     * @method mapQuoteToJsonApiFormat
     * @param {Object} quote
     * @return {Object} JSON-API Document
     */
    mapQuoteToJsonApiFormat: function(quote) {
        var output = {
            id: quote.symbol.toLowerCase(),
            relationships: {},
            type: "quotes",
            attributes: {
                symbol: quote.symbol,
                description: quote.description,
                exch: quote.exch,
                type: quote.type,
                last: quote.last,
                change: quote.change,
                change_percentage: quote.change_percentage,
                volume: quote.volume,
                average_volume: quote.average_volume,
                lastVolume: quote.last_volume,
                trade_date: quote.trade_date,
                open: quote.open,
                high: quote.high,
                low: quote.low,
                close: quote.close,
                prevclose: quote.prevclose,
                week52_high: quote.week_52_high,
                week52_low: quote.week_52_low,
                bid: quote.bid,
                bidsize: quote.bidsize,
                bidexch: quote.bidexch,
                bidDate: quote.bid_date,
                ask: quote.ask,
                asksize: quote.asksize,
                askexch: quote.askexch,
                askDate: quote.ask_date,
            }
        };
        return output;
    },
});
