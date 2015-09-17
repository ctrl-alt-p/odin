/**
 * https://developer.tradier.com/documentation/markets/get-options-chains
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/options/chains
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
 *   symbol             = Option symbol
 *   strike             = Option strike price
 *   last               = Last price
 *   bid                = Current bid
 *   ask                = Current ask
 *   change             = Daily net change
 *   open_interest      = Current open interest
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});