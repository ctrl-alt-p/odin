/**
 * https://developer.tradier.com/documentation/trading/create-order
 *
 * Single-leg Order Endpoint:
 * =========
 *   Method: POST
 *   URL:    /v1/accounts/{account_id}/orders
 *   Headers:
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 *
 *   Path Parameters:
 *     account_id: An account number
 *   Form Parameters:
 *     class: The kind of order to be placed
 *       Options: equity, option
 *       Required: true
 *     symbol: The symbol ordered.
 *       Required: true
 *     duration: Options: day, gtc
 *       The time for which the order will be remain in effect
 *       Required: true
 *     side: The side of the order.
 *       Equity order options: buy, buy_to_cover, sell, sell_short
 *       Option order options: buy_to_open, buy_to_close, sell_to_open, sell_to_close
 *       Required: true
 *     quantity: The number of shares ordered.
 *       Required: true
 *     type: The type of order to be placed.
 *       Options: market, limit, stop, stop_limit
 *       Required: true
 *     price: The desired order limit price for "limit" and "stop_limit" orders.
 *       Required for "limit", "stop_limit"
 *     stop: The stop price in a "stop" or "stop_limit" typed order.
 *       Required for "stop" and "stop_limit"
 *     option_symbol: An OCC formatted option symbol. Example: AAPL140118C00195000
 *       Required for "option" orders
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Order ID
 *   status             = Acknoweldgement of receipt
 *
 *
 *
 *
 * Multileg Order Endpoint:
 * =========
 *   Method: POST
 *   URL:    /v1/accounts/{account_id}/orders
 *   Headers:
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 *
 *   Path Parameters:
 *     account_id: An account number
 *   Form Parameters:
 *     class: The kind of order to be placed
 *       Options: multileg, combo
 *       Required: true
 *     symbol: The underlying symbol ordered for all legs.
 *       Required: true
 *     duration: Options: day, gtc
 *       The time for which the order will be remain in effect
 *       Required: true
 *     type: The type of order to be placed.
 *       Options: market, debit, credit, even
 *       Required: true
 *     price: The desired order price for "debit" and "credit" orders.
 *       Required for "debit", "credit" orders.
 *     side[index]: The side of the leg at "index".
 *       Equity leg options: buy, buy_to_cover, sell, sell_short
 *       Option leg options: buy_to_open, buy_to_close, sell_to_open, sell_to_close
 *       Required: true
 *     quantity[index]: The number of shares/contracts of the leg at "index".
 *       Required: true
 *     option_symbol[index]: An OCC formatted option symbol (AAPL140118C00195000) of the leg at "index"
 *       This should still be sent as null for equity legs.
 *       Required: true
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Order ID
 *   status             = Acknoweldgement of receipt
 *
 *
 *
 * Preview an Order Endpoint:
 * =========
 *  Method: POST
 *  URL:    /v1/accounts/{account_id}/orders
 *  Headers:
 *  Accept: application/xml, application/json, application/javascript
 *    Default: application/xml
 *    Required: false
 *  Authorization: Bearer {access token}
 *    Required: true
 *  Path Parameters:
 *    account_id: An account number
 *  Form Parameters:
 *    preview: Set to true in order to preview.
 *    class: The kind of order to be placed
 *      Options: equity, option
 *      Required: true
 *    symbol: The symbol ordered.
 *      Required: true
 *    duration: Options: day, gtc
 *      The time for which the order will be remain in effect
 *      Required: true
 *    side: The side of the order.
 *      Equity order options: buy, buy_to_cover, sell, sell_short
 *      Option order options: buy_to_open, buy_to_close, sell_to_open, sell_to_close
 *      Required: true
 *    quantity: The number of shares ordered.
 *      Required: true
 *    type: The type of order to be placed.
 *      Options: market, limit, stop, stop_limit
 *      Required: true
 *    price: The desired order limit price for "limit" and "stop_limit" orders.
 *      Required for "limit", "stop_limit"
 *    stop: The stop price in a "stop" or "stop_limit" typed order.
 *      Required for "stop" and "stop_limit"
 *    option_symbol: An OCC formatted option symbol. Example: AAPL140118C00195000
 *      Required for "option" orders
 * Response:
 * =========
 *   Field              = Description
 *   commission         = Estimated commission for the order
 *   cost               = Estimated cost of the order (including commission)
 *   extended_hours     = true if the order was placed in pre/post markets
 *   fees               = Fee amount for the order
 *   margin_change      = Change in margin if the order was placed
 *   status             = Acknoweldgement of receipt
 *
 *
 *
 * Update an Order Endpoint:
 * =========
 *  Method: PUT
 *  URL:    /v1/accounts/{account_id}/orders/{id}
 *  Headers:
 *  Accept: application/xml, application/json, application/javascript
 *    Default: application/xml
 *    Required: false
 *  Authorization: Bearer {access token}
 *    Required: true
 *  Path Parameters:
 *    account_id: An account number
 *    id: An order number
 *  Form Parameters:
 *    type: The type of order to be placed.
 *      Options: market, limit, stop, stop_limit
 *      Required: true
 *    duration: Options: day, gtc
 *      The time for which the order will be remain in effect
 *      Required: true
 *    price: The desired order limit price for "limit" and "stop_limit" orders.
 *      Required for "limit", "stop_limit"
 *    stop: The stop price in a "stop" or "stop_limit" typed order.
 *      Required for "stop" and "stop_limit"
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Order ID
 *   status             = Acknoweldgement of receipt
 *
 *
 *
 *
 * Cancel an Order Endpoint:
 * =========
 *  Method: DELETE
 *  URL:    /v1/accounts/{account_id}/orders/{id}
 *  Headers:
 *  Accept: application/xml, application/json, application/javascript
 *    Default: application/xml
 *    Required: false
 *  Authorization: Bearer {access token}
 *    Required: true
 *  Path Parameters:
 *    account_id: An account number
 *    id: An order number
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Order ID
 *   status             = Acknoweldgement of receipt
 */
import Ember from 'ember';

export
default DS.Model.extend({});
