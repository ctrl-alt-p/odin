/**
 * https://developer.tradier.com/documentation/user/get-gainloss
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/user/gainloss
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
 *   close_date         = Date the position was closed.
 *   cost               = Total cost of the order.
 *   gain_loss          = Gain or loss on the position.
 *   gain_loss_percent  = Percentage of gain or loss on the position.
 *   open_date          = Date the position was opened
 *   proceeds           = Total amount received for the order.
 *   quantity           = Number of shares/contracts
 *   symbol             = Symbol
 *   term               = Length of time held (in days)
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
