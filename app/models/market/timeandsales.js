/**
 * https://developer.tradier.com/documentation/markets/get-timesales
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/timesales
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Parameters:
 *   symbol: The requested symbol
 *     Required: true
 *   interval: The interval of time for timesales pricing
 *     One of tick, 1min, 5min or 15min (default: tick)
 *     Optional: true
 *   start: Start datetime for timesales range represented as YYYY-MM-DD HH:MM
 *     Optional: true
 *   end: End date for timesales range represented as YYYY-MM-DD HH:MM
 *     Optional: true
 *   session_filter: The session conditions to requetst data for.
 *     'all' for all available data points (default)
 *     'open' for data points within open market hours only
 *     Optional: true
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   time               = Time
 *   price              = Last price for the time-series interval
 *   volume             = Total volume for the time-series interval
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    time: DS.attr('string'),
    price: DS.attr('string'),
    volume: DS.attr('string')
});
