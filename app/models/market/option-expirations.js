/**
 * https://developer.tradier.com/documentation/markets/get-options-expirations
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/options/expirations
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Parameters:
 *   symbol: The requested symbol
 *     Required: true
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   date               = An ISO representation of the expiration date in YYYY-MM-DD.
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    date: DS.attr('string')
});
