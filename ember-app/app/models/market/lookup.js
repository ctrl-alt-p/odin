/**
 * https://developer.tradier.com/documentation/markets/get-lookup
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/lookup
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Paremeters:
 *   q: A symbol or partial symbol to look up
 *     Optional: true
 *   exchanges: A comma-delimited list of exchange codes to query
 *     Example: exchanges=Q,N
 *     Optional: true
 *   types: A comma-delimited list of security types to query
 *     Valid types are stock, etf, index
 *     Example: types=stock,etf
 *     Optional: true
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   symbol             = Symbol of the company
 *   exchange           = Exchange where the company is listed
 *   type               = Type of the security (stock, etf, index)
 *   description        = Company description
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    symbol: DS.attr('string'),
    exchange: DS.attr('string'),
    type: DS.attr('string'),
    description: DS.attr('string')
});