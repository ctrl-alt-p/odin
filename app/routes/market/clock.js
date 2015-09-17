/**
 * https://developer.tradier.com/documentation/markets/get-clock
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/clock
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
 *   date               = An ISO representation of the date in YYYY-MM-DD.
 *   description        = Text description of market status
 *   next_change        = Time when next market state change will occur
 *   next_state         = Next market state
 *   state              = Current market state
 *   timestamp          = Current timestamp represented as a Unix epoch
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
