/**
 * https://developer.tradier.com/documentation/accounts/get-account-orders
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/orders
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 *
 *
 * Single Instance Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/orders/{id}
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
 *   id                 = Order number
 *   type               = Order type (market, limit, stop, stop_limit or market, credit, debit, even)
 *   class              = Classification of order (equity, option, multileg, combo)
 *   symbol             = Symbol
 *   side               = The side of the order (buy, buy_to_open, buy_to_cover, buy_to_close, sell, sell_short, sell_to_open, sell_to_close
 *   quantity           = Quantity
 *   status             = Status of the order (filled, canceled, open, expired, rejected, pending, partially_filled, submitted)
 *   duration           = Duration of the order (day, gtc)
 *   price              = Price
 *   option_type        = Option Type (put, call)
 *   expiration_date    = Option expiration date
 *   exch               = Exchange
 *   avg_fill_price     = Average fill price
 *   exec_quantity      = Quantity executed
 *   exec_exch          = Execution exchange
 *   last_price         = Last price
 *   last_quantity      = Last quantity
 *   remaining_quantity = Remaining quantity
 *   stop_price         = Stop Price
 *   num_legs           = The number of legs
 *   strategy           = The option strategy for multileg orders
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
