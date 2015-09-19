/**
 * https://developer.tradier.com/documentation/markets/get-search
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/search
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Paremeters:
 *   q: A search keyword
 *     Required: true
 *   indexes: Include indexes in the results
 *     Example: 'indexes=true'
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
