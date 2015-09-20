/**
 * https://developer.tradier.com/documentation/accounts/get-account-positions
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/history
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
 *   Field              = Description
 *   amount             = Value of transaction.
 *   date               = Date of event
 *   type               = Type of event that occurred (trade, journal).
 *   description        = Text description of event.
 *   commission         = Commission
 *   price              = Price
 *   quantity           = Quantity
 *   symbol             = Symbol
 *   trade_type         = Security type of the trade (Equity, Option)
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
