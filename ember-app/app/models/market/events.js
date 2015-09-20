/**
 * https://developer.tradier.com/documentation/streaming/get-markets-events
 *
 * Endpoint:
 * =========
 *   Method: POST
 *   URL:    /v1/markets/events
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Paremeters:
 *   sessionid: The session id you received from creating the session
 *     Required: true
 *   symbols: A comma delimited list of symbols, both equity and option symbols are accepted.
 *     Required: true
 *     Example: 'symbols=AAPL,MSFT,NFLX'
 *   filter: A comma delimited list of payload types you would like to receive. You can use this to receive data payloads of a specific type.
 *     Required: false
 *     Example: 'filter=quote,trade'
 *   linebreak: A boolean on whether to include a "\n" linebreak at the end of each payload. Any value will resolve to true, omit to set false.
 *     Required: false
 *     Example: 'linebreak=true'
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   type               = Type of event received. One of: trade, quote, summary
 *   symbol             = Symbol of the event
 *   exch               = Reporting exchange's code
 *   price              = Last price
 *   size               = Size of the current trade
 *   cvol               = Cumalative volume for the day
 *   date               = Unix timestamp of the event
 *   bid                = Bid
 *   bidsz              = Bid size
 *   bidexch            = Reporting exchange of the current bid
 *   biddate            = Date of the current bid
 *   ask                = Ask
 *   asksz              = Ask size
 *   askexch            = Reporting exchange of the current ask
 *   askdate            = Date of the current ask
 *   open               = Current day's open
 *   high               = High
 *   low                = Low
 *   prevClose          = Previous day's close
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    type: DS.attr('string'),
    symbol: DS.attr('string'),
    exch: DS.attr('string'),
    price: DS.attr('string'),
    size: DS.attr('string'),
    cvol: DS.attr('string'),
    date: DS.attr('string'),
    bid: DS.attr('string'),
    bidsz: DS.attr('string'),
    bidexch: DS.attr('string'),
    biddate: DS.attr('string'),
    ask: DS.attr('string'),
    asksz: DS.attr('string'),
    askexch: DS.attr('string'),
    askdate: DS.attr('string'),
    open: DS.attr('string'),
    high: DS.attr('string'),
    low: DS.attr('string'),
    prevClose: DS.attr('string')
});
