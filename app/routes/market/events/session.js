/**
 * https://developer.tradier.com/documentation/markets/create-events-session
 *
 * Endpoint:
 * =========
 *   Method: POST
 *   URL:    /v1/markets/events/session
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
 *   sessionid          = A unique session ID for use with streaming.
 *   url                = The URL to access for streaming market data.
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
