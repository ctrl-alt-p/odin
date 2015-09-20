/**
 * https://developer.tradier.com/documentation/markets/get-options-strikes
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/options/strikes
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Parameters:
 *   symbol: The requested symbol
 *     Required: true
 *   expiration: The expiration date to obtain an option chain for, respresented as YYYY-MM-DD.
 *     Required: true
 *     Example: 'expiration=2013-11-16'
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   strike             = Individual strike price
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
