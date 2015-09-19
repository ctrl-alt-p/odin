/**
 * https://developer.tradier.com/documentation/markets/get-quotes
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/quotes
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Parameters:
 *   symbols: A comma delimited list of symbols, both equity and option symbols are accepted.
 *     Required: true
 *     Example: 'symbols=AAPL,MSFT,NFLX,AAPL150117C00440000,AAPL150117C00395000'
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   symbol             = Symbol
 *   description        = Symbol description
 *   exch               = Exchange
 *   type               = Type of security (i.e. stock, etf, option, index)
 *   change             = Daily net change
 *   change_percentage  = Daily net change
 *   volume             = Volume for the day
 *   average_volume     = Average daily volume
 *   last_volume        = Last incremental volume
 *   trade_date         = Date and time of last trade
 *   open               = Opening price
 *   high               = Trading day high
 *   low                = Trading day low
 *   close              = Closing price
 *   prevclose          = Previous closing price
 *   week_52_high       = 52 week high
 *   week_52_low        = 52 week low
 *   bid                = Current bid
 *   bidsize            = Size of bid
 *   bidexch            = Exchange of bid
 *   bid_date           = Date and time of current bid
 *   ask                = Current ask
 *   asksize            = Size of ask
 *   askexch            = Exchange of ask
 *   ask_date           = Date and time of current ask
 *   open_interest      = Open interest
 *   underlying         = Underlying symbol
 *   strike             = Strike price
 *   contract_size      = Size of the contract in shares
 *   expiration_date    = Date of expiration
 *   expiration_type    = Type of expiration (standard, weekly)
 *   option_type        = Type of option (Call or Put)
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    symbol: DS.attr('string'),
    description: DS.attr('string'),
    exch: DS.attr('string'),
    type: DS.attr('string'),
    change: DS.attr('string'),
    change_percentage: DS.attr('string'),
    volume: DS.attr('string'),
    average_volume: DS.attr('string'),
    last_volume: DS.attr('string'),
    trade_date: DS.attr('string'),
    open: DS.attr('string'),
    high: DS.attr('string'),
    low: DS.attr('string'),
    close: DS.attr('string'),
    prevclose: DS.attr('string'),
    week_52_high: DS.attr('string'),
    week_52_low: DS.attr('string'),
    bid: DS.attr('string'),
    bidsize: DS.attr('string'),
    bidexch: DS.attr('string'),
    bid_date: DS.attr('string'),
    ask: DS.attr('string'),
    asksize: DS.attr('string'),
    askexch: DS.attr('string'),
    ask_date: DS.attr('string'),
    open_interest: DS.attr('string'),
    underlying: DS.attr('string'),
    strike: DS.attr('string'),
    contract_size: DS.attr('string'),
    expiration_date: DS.attr('string'),
    expiration_type: DS.attr('string'),
    option_type: DS.attr('string')
});
