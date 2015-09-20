/**
 * https://developer.tradier.com/documentation/accounts/get-account-positions
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/positions
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
 *   Field                  = Description
 *   cost_basis             = Cost basis
 *   date_acquired          = Date of acquisition.
 *   id                     = Position ID
 *   quantity               = Number of shares held.
 *   symbol                 = Symbol
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    cost_basis: DS.attr('string'),
    date_acquired: DS.attr('string'),
    id: DS.attr('string'),
    quantity: DS.attr('string'),
    symbol: DS.attr('string')
});
