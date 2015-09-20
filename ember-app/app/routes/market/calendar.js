/**
 * https://developer.tradier.com/documentation/markets/get-calendar
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/search
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Paremeters:
 *   month: Month of the calendar requested.
 *     Optional: true
 *   year: Year of the calendar requested.
 *     Optional: true
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   month              = The month of the calendar.
 *   year               = The year of the calendar.
 *   date               = An ISO representation of the date in YYYY-MM-DD.
 *   status             = The status of the market on the calendar day (one of: open, closed or holiday).
 *   description        = A textual description of the market status (i.e., 'Market is Closed')
 *   premarket          = A container node for premarket hours (only returned on days when market is open).
 *   open               = A container node for open hours (only returned on days when market is open).
 *   postmarket         = A container node for postmarket hours (only returned on days when market is open).
 *   start              = The start time for the premarket/open/postmarket time range.
 *   end                = The end time for the premarket/open/postmarket time range.
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
