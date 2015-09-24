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
        //     "profile": {
        //         "account": {
        //             "account_number": 46885349,
        //             "classification": "individual",
        //             "date_created": "2015-06-05T12:11:20.000Z",
        //             "day_trader": false,
        //             "option_level": 2,
        //             "status": "new",
        //             "type": "margin",
        //             "last_update_date": "2015-06-05T12:11:20.000Z"
        //         },
        //         "id": "id-ezflhiin",
        //         "name": "Glenn Nagel"
        //     }
        // }
        var profile = this.mapProfileToJsonApiFormat(payload.profile);
        payload = {
            data: profile,
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
        var profile = this.mapProfileToJsonApiFormat(payload.profile);
        payload = {
            data: [profile],
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
     * var profile = {
     *     "profile": {
     *         "account": {
     *             "account_number": 46885349,
     *             "classification": "individual",
     *             "date_created": "2015-06-05T12:11:20.000Z",
     *             "day_trader": false,
     *             "option_level": 2,
     *             "status": "new",
     *             "type": "margin",
     *             "last_update_date": "2015-06-05T12:11:20.000Z"
     *         },
     *         "id": "id-ezflhiin",
     *         "name": "Glenn Nagel"
     *     }
     * }
     */
    mapProfileToJsonApiFormat: function(profile) {
        var output = {
            id: profile.id.toLowerCase(),
            relationships: {
                account: profile.account.account_number
            },
            type: "users",
            attributes: {
                name: profile.name,
                created_at: profile.account.date_created,
                updated_at: profile.account.last_update_date,
                //
                classification: profile.account.classification,
                day_trader: profile.account.day_trader,
                option_level: profile.account.option_level,
                status: profile.account.status,
                //
                account_number: profile.account.account_number,
                account_type: profile.account.type,
            }
        };
        return output;
    },
});
