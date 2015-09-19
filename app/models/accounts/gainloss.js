/**
 * https://developer.tradier.com/documentation/accounts/get-account-gainloss
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/gainloss
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
default DS.Model.extend({
    close_date: DS.attr('string'),
    cost: DS.attr('string'),
    gain_loss: DS.attr('string'),
    gain_loss_percent: DS.attr('string'),
    open_date: DS.attr('string'),
    proceeds: DS.attr('string'),
    quantity: DS.attr('string'),
    symbol: DS.attr('string'),
    term: DS.attr('string')
});
