/**
 * https://developer.tradier.com/documentation/markets/get-history
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/history
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Parameters:
 *   symbol: The requested symbol
 *     Required: true
 *   interval: The interval of time for historical pricing
 *     One of daily, weekly or monthly (default: daily)
 *     Optional: true
 *   start: Start date for history range represented as YYYY-MM-DD
 *     Optional: true
 *   end: End date for history range represented as YYYY-MM-DD
 *     Optional: true
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   date               = An ISO representation of the date in YYYY-MM-DD.
 *   open               = Opening price for the requested interval
 *   close              = Closing price for the requested interval
 *   high               = High price for the requested interval
 *   low                = Low price for the requested interval
 *   volume             = Daily volume
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    date: DS.attr('string'),
    open: DS.attr('string'),
    close: DS.attr('string'),
    high: DS.attr('string'),
    low: DS.attr('string'),
    volume: DS.attr('string')
});
