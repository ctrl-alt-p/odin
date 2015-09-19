/**
 * https://developer.tradier.com/documentation/accounts/get-account-balance
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/accounts/{account_id}/balances
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
 *   Field                   = Description
 *   account_number          = Account Number
 *   account_type            = Account Type (margin, cash, pdt)
 *   cash_available          = The amount of cash that could be withdrawn or invested in new investments, cash that is not required to support existing positions
 *   close_pl                = The Profit & Loss of the current trading day’s closed positions.
 *   current_requirement     = The option requirement of current account positions.
 *   day_trade_buying_power  = The total amount of funds available for the purchase of fully marginable stock during that trading day, a portion of these funds cannot be held overnight.
 *   dividend_balance        = Dividend Balance
 *   equity                  = Equity Value
 *   fed_call                = The amount that the account is in deficit for trades that have occurred but not been paid for.
 *   long_liquid_value       = Long Liquid Value
 *   long_market_value       = Long Market Value
 *   maintenance_call        = The amount that the account is under the minimum equity required in the account to support the current holdings.
 *   market_value            = Market Value
 *   net_value               = Net Value
 *   open_pl                 = The Profit & Loss of current account positions.
 *   option_buying_power     = The amount of funds available to purchase non-marginable securities.
 *   option_long_value       = The value of long options held in the account.
 *   option_requirement      = Option Requirement
 *   option_short_value      = The value of short options held in the account.
 *   pending_cash            = The amount of cash that is being held for open orders.
 *   pending_orders_count    = The amount of open orders.
 *   sweep                   = Sweep
 *   short_liquid_value      = Short Liquid Value
 *   short_market_value      = Short Market Value
 *   stock_buying_power      = The amount of funds available to purchase fully marginable securities.
 *   stock_long_value        = The value of long stocks held in the account.
 *   stock_short_value       = The value of short stocks held in the account.
 *   uncleared_funds         = The amount of funds that are not currently available for trading.
 *   unsettled_funds         = Cash that is in the account from recent stock or option sales, but has not yet settled; cash from stock sales occurring during the last 3 trading days or from option sales occurring during the previous trading day.
 *   total_cash              = The total amount of cash in the account.
 *   total_equity            = The total account value.
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    account_number: DS.attr('string'),
    account_type: DS.attr('string'),
    cash_available: DS.attr('string'),
    close_pl: DS.attr('string'),
    current_requirement: DS.attr('string'),
    day_trade_buying_power: DS.attr('string'),
    dividend_balance: DS.attr('string'),
    equity: DS.attr('string'),
    fed_call: DS.attr('string'),
    long_liquid_value: DS.attr('string'),
    long_market_value: DS.attr('string'),
    maintenance_call: DS.attr('string'),
    market_value: DS.attr('string'),
    net_value: DS.attr('string'),
    open_pl: DS.attr('string'),
    option_buying_power: DS.attr('string'),
    option_long_value: DS.attr('string'),
    option_requirement: DS.attr('string'),
    option_short_value: DS.attr('string'),
    pending_cash: DS.attr('string'),
    pending_orders_count: DS.attr('string'),
    sweep: DS.attr('string'),
    short_liquid_value: DS.attr('string'),
    short_market_value: DS.attr('string'),
    stock_buying_power: DS.attr('string'),
    stock_long_value: DS.attr('string'),
    stock_short_value: DS.attr('string'),
    uncleared_funds: DS.attr('string'),
    unsettled_funds: DS.attr('string'),
    total_cash: DS.attr('string'),
    total_equity: DS.attr('string')
});
